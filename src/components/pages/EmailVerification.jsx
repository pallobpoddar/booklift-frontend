import EmailVerificationBox from "../templates/EmailVerificationBox";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authApi from "../../api/authApi";
import { useParams, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/slices/userSlice";

const EmailVerification = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [emailVerificationErrorResponse, setEmailVerificationErrorResponse] =
    useState({});
  const { id, token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showAlert = (data) => {
    if (data.success) {
      toast.success(data.message, {
        autoClose: false,
        hideProgressBar: true,
        theme: "colored",
      });
    } else {
      toast.error(data.message, {
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    let isMounted = true;
    setIsPageLoading(true);

    const verify = async () => {
      try {
        const response = await authApi.verifyEmail(id, token);
        if (isMounted) {
          dispatch(signIn(response.data.data));
          setIsPageLoading(false);
          navigate("/");
        }
      } catch (error) {
        if (isMounted) {
          setIsPageLoading(false);
          setEmailVerificationErrorResponse({
            message: error.response.data.message,
            status: error.response.status,
          });
        }
      }
    };

    verify();

    return () => {
      isMounted = false;
    };
  }, [id, token, navigate, dispatch]);

  const handleClick = async () => {
    setIsButtonLoading(true);

    try {
      const response = await authApi.resendVerificationEmail(id);
      setIsButtonLoading(false);
      showAlert(response.data);
    } catch (error) {
      setIsButtonLoading(false);
      showAlert(error.response.data);
    }
  };

  return (
    <EmailVerificationBox
      isPageLoading={isPageLoading}
      isButtonLoading={isButtonLoading}
      emailVerificationErrorResponse={emailVerificationErrorResponse}
      onClick={handleClick}
    />
  );
};

export default EmailVerification;

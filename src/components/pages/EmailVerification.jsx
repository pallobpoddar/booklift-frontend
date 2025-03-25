import EmailVerificationBox from "../templates/EmailVerificationBox";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authApi from "../../api/authApi";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/slices/userSlice";

const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    const verify = async () => {
      try {
        const response = await authApi.verifyEmail(id, token);
        dispatch(signIn(response.data.data));
        navigate("/");
      } catch (error) {
        if (isMounted) showAlert(error.response?.data);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    verify();

    return () => {
      isMounted = false;
    };
  }, [id, token, navigate, dispatch]);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await authApi.verifyEmail(id, token);
      showAlert(response.data);
    } catch (error) {
      showAlert(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return <EmailVerificationBox isLoading={isLoading} onClick={handleClick} />;
};

export default EmailVerification;

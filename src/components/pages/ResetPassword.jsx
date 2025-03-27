import FormBox from "../templates/FormBox";
import { useState } from "react";
import authApi from "../../api/authApi";
import { showErrorAlert } from "../../utils/toaster";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import ResetPasswordForm from "../organisms/ResetPasswordForm";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id, token } = useParams();
  const navigate = useNavigate();

  const handlerOnSubmit = async (formData) => {
    setIsLoading(true);

    try {
      await authApi.resetPassword(id, token, formData);
      setIsLoading(false);
      navigate("/signin");
    } catch (error) {
      setIsLoading(false);
      showErrorAlert(error.response.data);
    }
  };

  return (
    <FormBox
      title="Reset Password"
      Form={ResetPasswordForm}
      isLoading={isLoading}
      onFormSubmit={handlerOnSubmit}
    />
  );
};

export default ResetPassword;

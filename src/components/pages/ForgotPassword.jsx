import FormBox from "../templates/FormBox";
import ForgotPasswordForm from "../organisms/ForgotPasswordForm";
import { useState } from "react";
import { showSuccessAlert, showErrorAlert } from "../../utils/toaster";
import authApi from "../../api/authApi";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlerOnSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const response = await authApi.sendPasswordResetEmail(formData);
      setIsLoading(false);
      showSuccessAlert(response.data);
    } catch (error) {
      setIsLoading(false);
      showErrorAlert(error.response.data);
    }
  };

  return (
    <FormBox
      title="Forgot Password?"
      Form={ForgotPasswordForm}
      isLoading={isLoading}
      onFormSubmit={handlerOnSubmit}
    />
  );
};

export default ForgotPassword;

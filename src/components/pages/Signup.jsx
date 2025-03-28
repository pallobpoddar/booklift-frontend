import FormBox from "../templates/FormBox";
import SignupForm from "../organisms/SignupForm";
import { Link } from "react-router";
import { useState } from "react";
import authApi from "../../api/authApi";
import { showSuccessAlert, showErrorAlert } from "../../utils/toaster";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlerOnSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const response = await authApi.signUp(formData);
      setIsLoading(false);
      showSuccessAlert(response.data);
    } catch (error) {
      setIsLoading(false);
      showErrorAlert(error.response.data);
    }
  };

  return (
    <FormBox
      title="Sign Up"
      Form={SignupForm}
      isLoading={isLoading}
      onFormSubmit={handlerOnSubmit}
    >
      <Link to={"/signin"} style={{ textDecoration: "none", color: "#3e5962" }}>
        Already have an account?
      </Link>
    </FormBox>
  );
};

export default Signup;

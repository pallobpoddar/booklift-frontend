import FormBox from "../templates/FormBox";
import SignupForm from "../organisms/SignupForm";
import { Link } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import authApi from "../../api/authApi";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  const handlerOnSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const response = await authApi.signUp(formData);
      showAlert(response.data);
    } catch (error) {
      showAlert(error.response.data);
    } finally {
      setIsLoading(false);
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

import FormBox from "../templates/FormBox";
import { Link } from "react-router";
import SigninForm from "../organisms/SigninForm";
import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";
import authApi from "../../api/authApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../../redux/slices/userSlice";

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showAlert = (data) => {
    if (!data.success) {
      toast.error(data.message, {
        theme: "colored",
      });
    }
  };

  const handlerOnSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const response = await authApi.signIn(formData);
      dispatch(signIn(response.data.data));
      response.data.data.role === "Admin" ? navigate("/admin") : navigate("/");
    } catch (error) {
      showAlert(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormBox
      title="Sign In"
      Form={SigninForm}
      isLoading={isLoading}
      onFormSubmit={handlerOnSubmit}
    >
      <StyledTextWrapper>
        <Link
          to={"/signup"}
          style={{ textDecoration: "none", color: "#3e5962" }}
        >
          Don&apos;t have an account?
        </Link>
        <Link
          to={"/user/forgot-password"}
          style={{ textDecoration: "none", color: "#3e5962" }}
        >
          Forgot password?
        </Link>
      </StyledTextWrapper>
    </FormBox>
  );
};

export default Signin;

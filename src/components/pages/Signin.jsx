import FormBox from "../templates/FormBox";
import { Link } from "react-router";
import SigninForm from "../organisms/SigninForm";
import styled from "styled-components";
import { useState } from "react";
import authApi from "../../api/authApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../../redux/slices/userSlice";
import { showErrorAlert } from "../../utils/toaster";

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerOnSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const response = await authApi.signIn(formData);
      dispatch(signIn(response.data.data));
      setIsLoading(false);
      response.data.data.role === "Admin" ? navigate("/admin") : navigate("/");
    } catch (error) {
      setIsLoading(false);
      showErrorAlert(error.response.data);
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
          to={"/forgot-password"}
          style={{ textDecoration: "none", color: "#3e5962" }}
        >
          Forgot password?
        </Link>
      </StyledTextWrapper>
    </FormBox>
  );
};

export default Signin;

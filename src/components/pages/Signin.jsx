import FormBox from "../templates/FormBox";
import { Link } from "react-router";
import SigninForm from "../organisms/SigninForm";
import styled from "styled-components";

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Signin = () => {
  return (
    <FormBox title="Sign In" Form={SigninForm}>
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

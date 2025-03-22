// import Header1 from "../atoms/labels/Header1";
import SigninForm from "../organisms/SigninForm";
import {
  StyledFormHeader,
  StyledFormBox,
  StyledPageWrapper,
} from "../../App.styles";
import { Link } from "react-router";
import styled from "styled-components";

const StyledParagraph = styled.p`
  display: flex;
  justify-content: space-between;
`;

const SigninBox = () => {
  return (
    <StyledPageWrapper>
      <StyledFormBox>
        {/* <Header1 StyledHeader1={StyledFormHeader} text="Sign In" /> */}
        <SigninForm />
        <StyledParagraph>
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
        </StyledParagraph>
      </StyledFormBox>
    </StyledPageWrapper>
  );
};

export default SigninBox;

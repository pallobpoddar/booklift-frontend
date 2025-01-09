import Header1 from "../atoms/labels/Header1";
import SigninForm from "../organisms/SigninForm";
import {
  StyledFormHeader,
  StyledFormBox,
  StyledParentDiv,
} from "../../App.styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledParagraph = styled.p`
  display: flex;
  justify-content: space-between;
`;

const SigninBox = () => {
  return (
    <StyledParentDiv>
      <StyledFormBox>
        <Header1 StyledHeader1={StyledFormHeader} text="Sign In" />
        <SigninForm />
        <StyledParagraph>
          <Link
            to={"/signin"}
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
    </StyledParentDiv>
  );
};

export default SigninBox;

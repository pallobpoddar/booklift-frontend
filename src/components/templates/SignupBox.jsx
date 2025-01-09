import Header1 from "../atoms/labels/Header1";
import SignupForm from "../organisms/SignupForm";
import {
  StyledFormHeader,
  StyledFormBox,
  StyledParentDiv,
} from "../../App.styles";
import { Link } from "react-router-dom";

const SignupBox = () => {
  return (
    <StyledParentDiv>
      <StyledFormBox>
        <Header1 StyledHeader1={StyledFormHeader} text="Sign Up" />
        <SignupForm />
        <Link
          to={"/signin"}
          style={{ textDecoration: "none", color: "#3e5962" }}
        >
          Already have an account?
        </Link>
      </StyledFormBox>
    </StyledParentDiv>
  );
};

export default SignupBox;

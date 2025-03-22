import SignupForm from "../organisms/SignupForm";
import {
  StyledFormHeader,
  StyledFormBox,
  StyledPageWrapper,
} from "../../App.styles";
import { Link } from "react-router";
import Typography from "../atoms/Typography";

const SignupBox = () => {
  return (
    <StyledPageWrapper>
      <StyledFormBox>
        <Typography StyledComponent={StyledFormHeader}>Sign Up</Typography>
        <SignupForm />
        <Link
          to={"/signin"}
          style={{ textDecoration: "none", color: "#3e5962" }}
        >
          Already have an account?
        </Link>
      </StyledFormBox>
    </StyledPageWrapper>
  );
};

export default SignupBox;

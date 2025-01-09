import Header1 from "../atoms/labels/Header1";
import { StyledFormHeader, StyledFormBox } from "../../App.styles";

const EmailVerificationText = () => {
  return (
    <StyledFormBox>
      <Header1 StyledHeader1={StyledFormHeader} text="Account Verified" />
    </StyledFormBox>
  );
};

export default EmailVerificationText;

import EmailVerificationText from "../organisms/EmailVerificationText";
import { StyledPageWrapper, StyledFormBox } from "../../App.styles";

const EmailVerificationBox = () => {
  return (
    <StyledPageWrapper>
      <StyledFormBox>
        <EmailVerificationText />
      </StyledFormBox>
    </StyledPageWrapper>
  );
};

export default EmailVerificationBox;

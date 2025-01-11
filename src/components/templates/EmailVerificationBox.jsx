import EmailVerificationText from "../organisms/EmailVerificationText";
import { StyledParentDiv, StyledFormBox } from "../../App.styles";

const EmailVerificationBox = () => {
  return (
    <StyledParentDiv>
      <StyledFormBox>
        <EmailVerificationText />
      </StyledFormBox>
    </StyledParentDiv>
  );
};

export default EmailVerificationBox;

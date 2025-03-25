import EmailVerificationText from "../organisms/EmailVerificationText";
import { StyledPageWrapper, StyledFormBox } from "../../App.styles";

const EmailVerificationBox = ({isLoading, onClick}) => {
  return (
    <StyledPageWrapper>
      <StyledFormBox>
        <EmailVerificationText isLoading={isLoading} onClick={onClick} text={"Token is expired"} />
      </StyledFormBox>
    </StyledPageWrapper>
  );
};

export default EmailVerificationBox;

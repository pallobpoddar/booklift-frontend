import EmailVerificationText from "../organisms/EmailVerificationText";
import { StyledPageWrapper, StyledFormBox } from "../../App.styles";
import { MoonLoader } from "react-spinners";

const EmailVerificationBox = ({
  isPageLoading,
  isButtonLoading,
  emailVerificationErrorResponse,
  onClick,
}) => {
  return (
    <StyledPageWrapper>
      {isPageLoading && <MoonLoader color="#3e5962" />}

      {emailVerificationErrorResponse && (
        <StyledFormBox>
          <EmailVerificationText
            isLoading={isButtonLoading}
            emailVerificationErrorResponse={emailVerificationErrorResponse}
            onClick={onClick}
          />
        </StyledFormBox>
      )}
    </StyledPageWrapper>
  );
};

export default EmailVerificationBox;

import styled from "styled-components";
import Button from "../atoms/Button";
import { StyledButton } from "../../App.styles";
import { BeatLoader } from "react-spinners";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledSpan = styled.span`
  display: inline-flex;
  width: 100px;
  justify-content: center;
`;

const EmailVerificationText = ({
  isLoading,
  emailVerificationErrorResponse,
  onClick,
}) => {
  return (
    <StyledWrapper>
      <p>{emailVerificationErrorResponse.message}</p>
      {emailVerificationErrorResponse.status === 410 && (
        <Button StyledButton={StyledButton} onClick={onClick}>
          <StyledSpan>
            {isLoading ? <BeatLoader color="white" size={8} /> : "Resend Email"}
          </StyledSpan>
        </Button>
      )}
    </StyledWrapper>
  );
};

export default EmailVerificationText;

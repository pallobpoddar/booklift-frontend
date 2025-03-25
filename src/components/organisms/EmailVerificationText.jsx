import styled from "styled-components";
import Button from "../atoms/Button";
import { StyledButton } from "../../App.styles";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const EmailVerificationText = ({ isLoading, onClick, text }) => {
  return (
    <StyledWrapper>
      <p>{text}</p>
      <Button StyledButton={StyledButton} onClick={onClick}>
        {isLoading ? <BeatLoader color="white" size={8} /> : "Resend"}
      </Button>
    </StyledWrapper>
  );
};

export default EmailVerificationText;

/* eslint-disable no-unused-vars */
const Button = ({ StyledButton, type, onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

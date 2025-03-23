import {
  StyledFormHeader,
  StyledFormBox,
  StyledPageWrapper,
} from "../../App.styles";
import Typography from "../atoms/Typography";

const FormBox = ({ title, Form, onFormSubmit, children }) => {
  return (
    <StyledPageWrapper>
      <StyledFormBox>
        <Typography StyledComponent={StyledFormHeader}>{title}</Typography>
        <Form />
        {children}
      </StyledFormBox>
    </StyledPageWrapper>
  );
};

export default FormBox;

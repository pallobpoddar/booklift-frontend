import {
  StyledFormHeader,
  StyledFormBox,
  StyledPageWrapper,
} from "../../App.styles";
import Typography from "../atoms/Typography";

const FormBox = ({ title, Form, isLoading, onFormSubmit, children }) => {
  return (
    <StyledPageWrapper>
      <StyledFormBox>
        <Typography StyledComponent={StyledFormHeader}>{title}</Typography>
        <Form isLoading={isLoading} onFormSubmit={onFormSubmit} />
        {children}
      </StyledFormBox>
    </StyledPageWrapper>
  );
};

export default FormBox;

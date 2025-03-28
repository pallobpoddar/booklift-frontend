import styled from "styled-components";
import Typography from "../atoms/Typography";
import { StyledButton } from "../../App.styles";
import { Link } from "react-router";

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  max-width: 450px;
`;

const StyledHeader = styled.h1`
  color: #3e5962;
  font-size: 128px;
  font-weight: bold;
`;

const StyledLargeText = styled.p`
  color: #347d56;
  font-size: 32px;
  font-weight: bold;
  padding-top: 1rem;
`;

const StyledSmallText = styled.p`
  color: #3e5962;
  font-size: 16px;
  padding: 1rem 0;
`;

const NotFoundText = () => {
  return (
    <StyledTextWrapper>
      <Typography StyledComponent={StyledHeader}>404</Typography>
      <Typography StyledComponent={StyledLargeText}>
        Sorry, we couldn't find this page.
      </Typography>
      <Typography StyledComponent={StyledSmallText}>
        But dont worry, you can find plenty of other things on our homepage.
      </Typography>
      <Link to="/">
        <StyledButton>Back to Homepage</StyledButton>
      </Link>
    </StyledTextWrapper>
  );
};

export default NotFoundText;

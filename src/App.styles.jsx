import styled from "styled-components";

const StyledHeader1 = styled.h1`
	color: #21282d;
	text-align: center;
`;

const StyledHeader2 = styled.h2`
	font-weight: normal;
	font-size: xx-large;
	margin-left: 30px;
`;

const StyledHeader3 = styled.h3`
	font-weight: 500;
	font-size: large;
	line-height: 2;
`;

const StyledBanner = styled.img`
	padding: 20px 40px;
	width: 95%;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	margin: 1.25rem 0;
`;

const StyledFormHeader = styled.h1`
	color: #3e5962;
	text-align: center;
`;

const StyledFormError = styled.p`
	font-size: smaller;
	margin: 0.25rem 0;
	width: 20rem;
`;

const StyledInput = styled.input`
	border: 1px solid #ccc;
	padding: 1rem 1.25rem;
	width: 100%;

	&:hover, &:focus {
		outline: none;
		border: 1px solid #346250;
	}
`;

const StyledButton = styled.button`
  padding: 0.75rem;
  background-color: #3e5962;
  color: white;
  font-weight: bold;
  border: none;
	cursor: pointer;
`;

const StyledFormRow = styled.div``;

const StyledFormBox = styled.article`
	padding: 3rem;
	border: 2px solid #e5e5e5;
	border-radius: 2px;
	width: 90%;
	max-width: 480px;
`;

const StyledPageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export {
	StyledHeader1,
	StyledHeader2,
	StyledHeader3,
	StyledBanner,
	StyledForm,
	StyledFormHeader,
	StyledFormError,
	StyledInput,
	StyledButton,
	StyledFormBox,
	StyledPageWrapper,
	StyledFormRow
};

import styled from "styled-components";

const StyledHeader1 = styled.h1`
	color: #21282d;
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

const StyledFormError = styled.p`
	font-size: smaller;
	margin: 0.25rem 0;
`;

const StyledInput = styled.input`
	border: 1px solid #ccc;
	padding: 1rem 1.25rem;
	width: 20rem;

	&:hover, &:focus {
		outline: none;
		border: 2px solid #346250;
		padding: calc(1rem - 1px) calc(1.25rem - 1px);
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

const StyledFormBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem;
	border: 2px solid #e5e5e5;
	border-radius: 2px;
`;

const StyledParentDiv = styled.div`
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
	StyledFormError,
	StyledInput,
	StyledButton,
	StyledFormBox,
	StyledParentDiv,
	StyledFormRow
};

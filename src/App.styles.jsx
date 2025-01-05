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
	gap: 1rem;
	margin: 20px 0px;
`;

const StyledFormError = styled.p`
	font-size: smaller;
`;

const StyledFormInput = styled.input`
	width: 300px;
	height: 25px;
	border: 1px solid #ccc;
	padding: 0.6rem 1rem;

	&:focus {
		outline: none;
		border: 2px solid #87ceeb;
	}
`;

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
	StyledFormInput,
	StyledFormBox,
	StyledParentDiv,
};

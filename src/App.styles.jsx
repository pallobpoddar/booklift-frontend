import styled from "styled-components";

const StyledHeader1 = styled.h1`
	font-weight: 600;
`;

const StyledBanner = styled.img`
	padding: 20px 40px;
	width: 95%;
`;

const StyledHeader2 = styled.h2`
	font-weight: normal;
	font-size: xx-large;
	margin-left: 30px;
`;

const StyledForm = styled.form`
	width: max-content;
`;

const StyledFormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0px;
`;

const StyledFormError = styled.div`
	font-size: smaller;
`;

const StyledFormInput = styled.input`
	width: 300px;
	height: 25px;
	background-color: #f5f5f6;
	border: 2px solid #dcdcdd;
	border-radius: 10px;
	padding-left: 15px;

	&:focus {
		outline: none;
		border: 2px solid #87ceeb;
	}
`;

const StyledFormBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: max-content;
	padding: 20px;
	border: 1px solid #e5e5e5;
	border-radius: 2px;
	margin: 100px 450px;
	background-color: #fff;
`;

export {
	StyledHeader1,
	StyledBanner,
	StyledHeader2,
	StyledForm,
	StyledFormRow,
	StyledFormError,
	StyledFormInput,
	StyledFormBox,
};

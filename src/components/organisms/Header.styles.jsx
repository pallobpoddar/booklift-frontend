import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding: 25px;
	column-gap: 60px;
	border-bottom: 0.5px solid #e5e5e5;
`;

const StyledList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding: 25px;
	column-gap: 60px;
	border-bottom: 0.5px solid #e5e5e5;
	padding: 0px;
	list-style: none;
	border-bottom: none;
`;

const StyledInput = styled.input`
	outline: none;
	height: 40px;
	width: 400px;
	background-color: #f5f5f6;
	border: 2px solid #f5f5f6;
	border-radius: 2px;
	padding-left: 30px;

	&:focus {
		background-color: #fff;
	}
`;

const StyledIcon = styled.button`
	border: none;
	background-color: #fff;
	padding: 0px;
`;

export { StyledHeader, StyledList, StyledInput, StyledIcon };

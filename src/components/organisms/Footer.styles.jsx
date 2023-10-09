import styled from "styled-components";

const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding: 25px;
	column-gap: 80px;
	border-top: 0.5px solid #e5e5e5;
`;

const StyledFooterList = styled.ul`
	list-style: none;
	line-height: 2;
`;

export { StyledFooter, StyledFooterList };

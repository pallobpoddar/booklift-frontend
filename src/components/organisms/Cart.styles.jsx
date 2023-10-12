import styled from "styled-components";

const StyledCart = styled.div`
	background-color: #fff;
	padding: 30px;
	margin: 20px 0px;
`;

const StyledHeader = styled.div`
	padding-left: 40px;
`;

const StyledList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 80px;
`;

const StyledCartImage = styled.img`
	width: 50px;
	height: 50px;
`;

const StyledTotal = styled.div`
	display: flex;
	justify-content: center;
`;

export { StyledCart, StyledHeader, StyledList, StyledCartImage, StyledTotal };

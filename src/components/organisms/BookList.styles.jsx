import styled from "styled-components";

const StyledBookList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 20px;
	margin: 50px;
`;

const StyledBook = styled.ul`
	display: grid;
	grid-template-rows: max-content 50px 1fr;
	list-style: none;
`;

const StyledBookImage = styled.img`
	width: 150px;
	height: 200px;
`;

const StyledListTitle = styled.div`
	font-weight: 500;
	line-height: 1.6;
`;

export { StyledBookList, StyledBook, StyledBookImage, StyledListTitle };

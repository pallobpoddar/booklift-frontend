import styled from "styled-components";

const StyledBookBox = styled.div`
	display: flex;
`;

const StyledBookList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 20px;
	margin: 30px 30px 30px 15px;
	padding: 30px;
	border-radius: 5px;
	box-shadow: 0 0 5px #00000033;
	background-color: #fff;
	width: 100%;
`;

const StyledBook = styled.div`
	display: grid;
	grid-template-rows: max-content;
`;

const StyledBookImage = styled.img`
	width: 150px;
	height: 200px;
`;

const StyledListTitle = styled.div`
	font-weight: 500;
	line-height: 1.6;
	max-width: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export {
	StyledBookBox,
	StyledBookList,
	StyledBook,
	StyledBookImage,
	StyledListTitle,
};

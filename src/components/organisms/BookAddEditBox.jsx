import React from "react";
// import Header1 from "../atoms/labels/Header1";
import {
	StyledHeader1,
	StyledFormBox,
	StyledPageWrapper,
} from "../../App.styles";
import AdminBookUpdate from "../molecules/AdminBookUpdate";

const BookAddEditBox = () => {
	return (
		<StyledPageWrapper>
			<StyledFormBox>
				{/* <Header1
					StyledHeader1={StyledHeader1}
					text="Update Book"
				/> */}
				<AdminBookUpdate action="update" />
			</StyledFormBox>
		</StyledPageWrapper>
	);
};

export default BookAddEditBox;

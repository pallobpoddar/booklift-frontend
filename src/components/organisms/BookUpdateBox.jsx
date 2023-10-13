import React from "react";
import Header1 from "../atoms/labels/Header1";
import {
	StyledHeader1,
	StyledFormBox,
	StyledParentDiv,
} from "../../App.styles";
import AdminBookAdd from "../pages/admin/AdminBookAdd";

const BookUpdateBox = () => {
	return (
		<StyledParentDiv>
			<StyledFormBox>
				<Header1
					StyledHeader1={StyledHeader1}
					text="Add Book"
				/>
				<AdminBookAdd action="add" />
			</StyledFormBox>
		</StyledParentDiv>
	);
};

export default BookUpdateBox;

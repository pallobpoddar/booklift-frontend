import React from "react";
import Header1 from "../atoms/labels/Header1";
import {
	StyledHeader1,
	StyledFormBox,
	StyledParentDiv,
} from "../../App.styles";
import ResetPasswordForm from "../molecules/ResetPasswordForm";

const ResetPasswordBox = () => {
	return (
		<StyledParentDiv>
			<StyledFormBox>
				<Header1
					StyledHeader1={StyledHeader1}
					text="Reset your password"
				/>
				<ResetPasswordForm />
			</StyledFormBox>
		</StyledParentDiv>
	);
};

export default ResetPasswordBox;

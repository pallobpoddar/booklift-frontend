import React from "react";
import Header1 from "../atoms/labels/Header1";
import {
	StyledHeader1,
	StyledFormBox,
	StyledParentDiv,
} from "../../App.styles";
import ForgotPasswordForm from "../molecules/ForgotPasswordForm";

const ForgotPasswordBox = () => {
	return (
		<StyledParentDiv>
			<StyledFormBox>
				<Header1
					StyledHeader1={StyledHeader1}
					text="Reset your password"
				/>
				<ForgotPasswordForm />
			</StyledFormBox>
		</StyledParentDiv>
	);
};

export default ForgotPasswordBox;

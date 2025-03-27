import React from "react";
// import Header1 from "../atoms/labels/Header1";
import {
	StyledHeader1,
	StyledFormBox,
	StyledPageWrapper,
} from "../../App.styles";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPasswordBox = () => {
	return (
		<StyledPageWrapper>
			<StyledFormBox>
				{/* <Header1
					StyledHeader1={StyledHeader1}
					text="Reset your password"
				/> */}
				<ResetPasswordForm />
			</StyledFormBox>
		</StyledPageWrapper>
	);
};

export default ResetPasswordBox;

import React from "react";
// import Header1 from "../atoms/labels/Header1";
import {
	StyledHeader1,
	StyledFormBox,
	StyledPageWrapper,
} from "../../App.styles";
import ForgotPasswordForm from "../molecules/ForgotPasswordForm";

const ForgotPasswordBox = () => {
	return (
		<StyledPageWrapper>
			<StyledFormBox>
				{/* <Header1
					StyledHeader1={StyledHeader1}
					text="Reset your password"
				/> */}
				<ForgotPasswordForm />
			</StyledFormBox>
		</StyledPageWrapper>
	);
};

export default ForgotPasswordBox;

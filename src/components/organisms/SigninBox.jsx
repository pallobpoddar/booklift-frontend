import React from "react";
import Header1 from "../atoms/labels/Header1";
import SigninForm from "../molecules/SigninForm";
import { StyledHeader1, StyledFormBox } from "../../App.styles";
import { Link } from "react-router-dom";

const SigninBox = () => {
	return (
		<StyledFormBox>
			<Header1
				StyledHeader1={StyledHeader1}
				text="Sign In"
			/>
			<SigninForm />
			Don't have an account?
			<Link
				to={"/user/signup"}
				className="linkWithStyle">
				Create one
			</Link>
		</StyledFormBox>
	);
};

export default SigninBox;

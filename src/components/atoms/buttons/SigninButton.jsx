import React from "react";
import "./SigninButton.scss";
import { Link } from "react-router-dom";

function SigninButton() {
	return (
		<button className="signin-button">
			<Link
				to={"/user/signin"}
				className="link">
				SIGN IN
			</Link>
		</button>
	);
}

export default SigninButton;

import Header1 from "../atoms/labels/Header1";
import SignupForm from "../organisms/SignupForm";
import {
	StyledHeader1,
	StyledFormBox,
	StyledParentDiv,
} from "../../App.styles";
import { Link } from "react-router-dom";

const SignupBox = () => {
  return (
    <StyledParentDiv>
			<StyledFormBox>
				<Header1
					StyledHeader1={StyledHeader1}
					text="Sign Up"
				/>
				<SignupForm />
				<p>
					Already registered?{" "}
					<Link
						to={"/user/signup"}
						className="linkWithStyle">
						Sign in
					</Link>
				</p>
			</StyledFormBox>
		</StyledParentDiv>
  )
}

export default SignupBox
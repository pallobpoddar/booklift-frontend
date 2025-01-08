import Header1 from "../atoms/labels/Header1";
import SigninForm from "../organisms/SigninForm";
import {
	StyledHeader1,
	StyledFormBox,
	StyledParentDiv,
} from "../../App.styles";
import { Link } from "react-router-dom";

const SigninBox = () => {
  return (
    <StyledParentDiv>
			<StyledFormBox>
				<Header1
					StyledHeader1={StyledHeader1}
					text="Sign In"
				/>
				<SigninForm />
				<p>
					Don&apos;t have an account?{" "}
					<Link
						to={"/signin"}
						className="linkWithStyle">
						Create one
					</Link>
				</p>
        <Link
					to={"/user/forgot-password"}
					className="linkWithStyle">
					Forgot password?
				</Link>
			</StyledFormBox>
		</StyledParentDiv>
  )
}

export default SigninBox
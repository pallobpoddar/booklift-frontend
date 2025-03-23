import FormBox from "../templates/FormBox";
import SignupForm from "../organisms/SignupForm";
import { Link } from "react-router";

const Signup = () => {
  return (
    <FormBox title="Sign Up" Form={SignupForm}>
      <Link to={"/signin"} style={{ textDecoration: "none", color: "#3e5962" }}>
        Already have an account?
      </Link>
    </FormBox>
  );
};

export default Signup;

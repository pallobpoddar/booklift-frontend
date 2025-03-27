import Button from "../atoms/Button";
import { StyledButton } from "../../App.styles";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import authApi from "../../api/authApi";
import { showErrorAlert } from "../../utils/toaster";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authId = useSelector((state) => state.user.authId);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      await authApi.signOut(authId);
      dispatch(signOut());
      setIsLoading(false);
      navigate("/signin");
    } catch (error) {
      setIsLoading(false);
      showErrorAlert(error.response.data);
    }
  };

  return (
    <>
      <Button StyledButton={StyledButton} onClick={handleClick}>
        {isLoading ? <BeatLoader color="white" size={8} /> : "SIGN OUT"}
      </Button>
    </>
  );
};

export default AdminDashboard;

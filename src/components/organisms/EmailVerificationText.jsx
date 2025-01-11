import { useEffect } from "react";
import Header1 from "../atoms/labels/Header1";
import usePatch from "../../hooks/usePatch";
import { emailVerificationUrl } from "../../api/auths";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveSignIn } from "../../redux/slices/userSlice";
import { FadeLoader } from "react-spinners";
import { StyledFormHeader, StyledButton } from "../../App.styles";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const EmailVerificationText = () => {
  const { token, id } = useParams();
  const { data, error, loading, patchData } = usePatch(
    `${emailVerificationUrl}/${token}/${id}`
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyEmail = async () => {
      await patchData();

      if (data) {
        dispatch(saveSignIn(data));
        navigate("/");
      } else if (error?.errors?.status === 409) {
        navigate("/");
      }
    };

    verifyEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledDiv>
      {loading && <FadeLoader size={10} color="#3e5962" />}
      {!loading && error && !error.errors && (
        <>
          <Header1
            StyledHeader1={StyledFormHeader}
            text="Verification Failed"
          />
          <p>{error.message}</p>
          <StyledButton>RESEND EMAIL</StyledButton>
        </>
      )}
    </StyledDiv>
  );
};

export default EmailVerificationText;

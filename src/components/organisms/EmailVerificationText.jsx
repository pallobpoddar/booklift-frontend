import { useEffect } from "react";
import Header1 from "../atoms/labels/Header1";
import usePatch from "../../hooks/usePatch";
// import {
//   emailVerificationUrl,
// } from "../../api/authApi";
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
  // const {
  //   data: verificationData,
  //   error: verificationError,
  //   loading: verificationLoading,
  //   patchData: verificationPatchData,
  // } = usePatch(`${emailVerificationUrl}/${token}/${id}`);
  // const {data: verificationResendData, error: verificationResendError, loading: verificationResendLoading, patchData:verificationResendPatchData } = usePatch(
  //   `${emailVerificationResendUrl}/${id}`
  // )
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // const verifyEmail = async () => {
    //   await verificationPatchData();
    //   if (verificationData) {
    //     dispatch(saveSignIn(verificationData));
    //     navigate("/");
    //   } else if (verificationError?.errors?.status === 409) {
    //     navigate("/");
    //   }
    // };

    // verifyEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleResendEmail = async () => {
  //   await verificationResendPatchData();
  // }

  // return (
    // <StyledDiv>
    //   {verificationLoading && <FadeLoader size={10} color="#3e5962" />}
    //   {!verificationLoading &&
    //     verificationError &&
    //     !verificationError.errors && (
    //       <>
    //         <Header1
    //           StyledHeader1={StyledFormHeader}
    //           text="Verification Failed"
    //         />
    //         <p>{verificationError.message}</p>
    //         <StyledButton>RESEND EMAIL</StyledButton>
    //       </>
    //     )}
    // </StyledDiv>
  // );
};

export default EmailVerificationText;

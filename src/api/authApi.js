import Api from "./apiConfig";

class AuthApi {
  endPoints = {
    signup: "/auth/signup",
    signin: "/auth/signin",
    emailVerification: "/auth/email-verification",
    emailVerificationResend: "/auth/email-verification-resend",
  };

  async signUp(data) {
    return await Api.http.post(this.endPoints.signup, data);
  }

  async signIn(data) {
    return await Api.http.post(this.endPoints.signin, data);
  }

  async verifyEmail(id, token) {
    return await Api.http.post(`/${id}/email-verification/${token}`);
  }
}

export default new AuthApi();

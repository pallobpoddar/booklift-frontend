import Api from "./apiConfig";

class AuthApi {
  async signUp(data) {
    return await Api.http.post("/auth/signup", data);
  }

  async signIn(data) {
    return await Api.http.post("/auth/signin", data);
  }

  async signOut(id) {
    return await Api.http.post(`/auth/${id}/signout`);
  }

  async verifyEmail(id, token) {
    return await Api.http.post(`/auth/${id}/email-verification/${token}`);
  }

  async resendVerificationEmail(id) {
    return await Api.http.post(`/auth/${id}/email-verification-resend`);
  }

  async sendPasswordResetEmail(data) {
    return await Api.http.post("/auth/forgot-password", data);
  }

  async resetPassword(id, token, data) {
    return await Api.http.post(`/auth/${id}/password-reset/${token}`, data);
  }
}

export default new AuthApi();

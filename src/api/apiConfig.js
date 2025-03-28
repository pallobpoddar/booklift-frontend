import axios from "axios";
import { store } from "../redux/store";
import { signOut } from "../redux/slices/userSlice";

class Api {
  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3000/api/v1",
      timeout: 10000,
      withCredentials: true,
    });

    this.http.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        const state = store.getState();
        const id = state.user.authId;

        if (error.response.data.errors === "INVALID_REFRESH_TOKEN") {
          store.dispatch(signOut(id));
        } else if (
          error.response.data.errors === "ACCESS_TOKEN_REQUIRED" &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          try {
            await this.http.post(`/auth/${id}/token-refresh`);
            return this.http(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }
}

export default new Api();

import axios from "axios";

class Api {
  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3000/api",
      timeout: 10000,
      withCredentials: true,
    });
  }
}

export default new Api();

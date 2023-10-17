import axios from "axios";

const fileInstance = axios.create({
	baseURL: "http://localhost:8000/api/files",
	timeout: 20000,
});

export default fileInstance;

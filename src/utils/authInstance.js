import axios from "axios";

const loginInstance = axios.create({
	baseURL: "http://localhost:8000/api/auths",
	timeout: 5000,
});

export default loginInstance;

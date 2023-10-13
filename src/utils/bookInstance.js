import axios from "axios";

const bookInstance = axios.create({
	baseURL: "http://localhost:8000/api/books",
	timeout: 5000,
});

export default bookInstance;

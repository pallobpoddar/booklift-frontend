import React from "react";
import { Navigate, Outlet } from "react-router";

const Authenticate = () => {
	const check = localStorage.getItem("token");
	console.log("Authenticating", check);

	return check ? (
		<div>
			<Outlet />{" "}
		</div>
	) : (
		<Navigate to="/admin/signin" />
	);
};

export default Authenticate;

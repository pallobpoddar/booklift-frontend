import React from "react";
import AboutUsList from "../molecules/AboutUsList";
import ServiceList from "../molecules/ServiceList";
import HelpList from "../molecules/HelpList";
import CustomerCareList from "../molecules/CustomerCareList";
import "../../App.scss";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="homePageFooter">
			<AboutUsList listStyle="footerList" />
			<ServiceList listStyle="footerList" />
			<HelpList listStyle="footerList" />
			<CustomerCareList listStyle="footerList" />
		</footer>
	);
};

export default Footer;

import React from "react";
import AboutUsList from "../molecules/AboutUsList";
import ServiceList from "../molecules/ServiceList";
import HelpList from "../molecules/HelpList";
import CustomerCareList from "../molecules/CustomerCareList";
import { StyledFooter, StyledFooterList } from "./Footer.styles";

const Footer = () => {
	return (
		<StyledFooter>
			<AboutUsList StyledFooterList={StyledFooterList} />
			<ServiceList StyledFooterList={StyledFooterList} />
			<HelpList StyledFooterList={StyledFooterList} />
			<CustomerCareList StyledFooterList={StyledFooterList} />
		</StyledFooter>
	);
};

export default Footer;

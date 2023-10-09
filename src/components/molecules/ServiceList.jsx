import React from "react";
import TitleList from "../atoms/lists/TitleList";
import PrimaryList from "../atoms/lists/PrimaryList";

const ServiceList = ({ StyledFooterList }) => {
	return (
		<StyledFooterList>
			<TitleList text="Khonika Services" />
			<PrimaryList text="Affiliate Program" />
			<PrimaryList text="Mobile App" />
			<PrimaryList text="Membership" />
			<PrimaryList text="Bookfairs" />
		</StyledFooterList>
	);
};

export default ServiceList;

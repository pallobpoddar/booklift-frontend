import React from "react";
import TitleList from "../atoms/lists/TitleList";
import PrimaryList from "../atoms/lists/PrimaryList";

const ServiceList = ({ listStyle }) => {
	return (
		<ul className={listStyle}>
			<TitleList text="Khonika Services" />
			<PrimaryList text="Affiliate Program" />
			<PrimaryList text="Mobile App" />
			<PrimaryList text="Membership" />
			<PrimaryList text="Bookfairs" />
		</ul>
	);
};

export default ServiceList;

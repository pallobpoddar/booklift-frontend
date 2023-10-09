import React from "react";
import TitleList from "../atoms/lists/TitleList";
import PrimaryList from "../atoms/lists/PrimaryList";

const CustomerCareList = ({ StyledFooterList }) => {
	return (
		<StyledFooterList>
			<TitleList text="Customer Care" />
			<PrimaryList text="Contact Us" />
			<PrimaryList text="Payment Method" />
			<PrimaryList text="Bonus Point" />
			<PrimaryList text="FAQ" />
		</StyledFooterList>
	);
};

export default CustomerCareList;

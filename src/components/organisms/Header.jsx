import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import NavigationList from "../molecules/NavigationList";
import PrimaryInput from "../atoms/inputs/PrimaryInput";
import IconButton from "../atoms/buttons/IconButton";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import "../../App.scss";
import "./Header.scss";

const Header = () => {
	return (
		<header className="homePageHeader">
			<NavigationList listStyle="navigationList" />
			<PrimaryInput
				type="search"
				inputStyle="searchField"
				placeholder="Search Khonika"
			/>
			<IconButton
				buttonStyle="iconButton"
				icon={faCartShopping}
				size="2xl"
			/>
			<PrimaryButton
				buttonStyle="primaryButton"
				text="Sign in"
				to="/user/signin"
			/>
		</header>
	);
};

export default Header;

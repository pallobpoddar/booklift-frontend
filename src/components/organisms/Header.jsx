import React from "react";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import NavigationList from "../molecules/NavigationList";
import PrimaryInput from "../atoms/inputs/PrimaryInput";
import IconButton from "../atoms/buttons/IconButton";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import {
	StyledHeader,
	StyledList,
	StyledInput,
	StyledIcon,
} from "./Header.styles.jsx";
import "../../App.scss";

const Header = () => {
	return (
		<StyledHeader>
			<NavigationList StyledList={StyledList} />
			<PrimaryInput
				type="search"
				StyledInput={StyledInput}
				placeholder="Search Khonika"
			/>
			<IconButton
				StyledIcon={StyledIcon}
				icon={faCartShopping}
				size="2xl"
			/>
			<Link
				to="/user/signin"
				className="link">
				<PrimaryButton
					buttonStyle="primaryButton"
					text="Sign in"
				/>
			</Link>
		</StyledHeader>
	);
};

export default Header;

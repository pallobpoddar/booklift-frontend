import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
	const data = useSelector((state) => state.user.userData);
	return (
		<StyledHeader>
			<NavigationList StyledList={StyledList} />
			<PrimaryInput
				type="search"
				StyledInput={StyledInput}
				placeholder="Search Khonika"
			/>
			<Link to="/user/cart" className="link">
				<IconButton
					StyledIcon={StyledIcon}
					icon={faCartShopping}
					size="2xl"
				/>
			</Link>
			<IconButton StyledIcon={StyledIcon} icon={faUser} size="2xl" />
			<Link to="/user/signin" className="link">
				{data === null || data === undefined ? (
					<PrimaryButton buttonStyle="primaryButton" text="Sign in" />
				) : (
					<PrimaryButton
						buttonStyle="primaryButton"
						text="Sign out"
					/>
				)}
			</Link>
		</StyledHeader>
	);
};

export default Header;

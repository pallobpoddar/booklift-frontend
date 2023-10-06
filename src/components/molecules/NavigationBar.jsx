import CartIcon from "../atoms/buttons/CartIcon";
import SigninButton from "../atoms/buttons/SigninButton";
import SearchField from "../atoms/inputs/SearchField";
import NavigationList from "../atoms/lists/NavigationList";
import "./NavigationBar.scss";

const NavigationBar = () => {
	return (
		<nav className="navbar">
			<NavigationList />
			<SearchField />
			<CartIcon />
			<SigninButton />
		</nav>
	);
};

export default NavigationBar;

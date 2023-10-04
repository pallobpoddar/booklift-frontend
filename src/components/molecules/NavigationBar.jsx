import SigninButton from "../atoms/buttons/SigninButton";
import SearchField from "../atoms/inputs/SearchField";
import NavigationList from "../atoms/lists/NavigationList";
import "./NavigationBar.scss";

const NavigationBar = () => {
	return (
		<nav className="navbar">
			<NavigationList />
			<SearchField />
			<SigninButton />
		</nav>
	);
};

export default NavigationBar;

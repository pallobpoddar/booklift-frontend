import "./NavigationBar.scss";
import { Link } from "react-router-dom";

const NavigationBar = () => {
	return (
		<nav className="navbar">
			<ul>Books</ul>
			<ul>Fiction</ul>
			<ul>Nonfiction</ul>
			<ul>Kids</ul>
			<ul>New releases</ul>

			<input
				type="search"
				className="searchbar"
				placeholder="Search Kavya"
			/>
			<button className="signin-button">
				<Link
					to={"/user/signin"}
					className="link">
					SIGN IN
				</Link>
			</button>
		</nav>
	);
};

export default NavigationBar;

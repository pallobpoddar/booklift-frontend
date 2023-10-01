import "./NavigationBar.scss";

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
			<button className="signin-button">SIGN IN</button>
		</nav>
	);
};

export default NavigationBar;

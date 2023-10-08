import React from "react";
import PrimaryList from "../atoms/lists/PrimaryList";
import TitleList from "../atoms/lists/TitleList";

const AboutUsList = ({ listStyle }) => {
	return (
		<ul className={listStyle}>
			<TitleList text="Get to know us" />
			<PrimaryList text="About Khonika" />
			<PrimaryList text="Careers" />
			<PrimaryList text="Blogs" />
			<PrimaryList text="Social Responsibility" />
		</ul>
	);
};

export default AboutUsList;

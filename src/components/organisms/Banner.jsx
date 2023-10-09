import React from "react";
import PrimaryImage from "../atoms/images/PrimaryImage";
import { StyledBanner } from "../../App.styles";

const Banner = () => {
	return (
		<>
			<PrimaryImage
				StyledImage={StyledBanner}
				src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/09/27/27677_Quote_A1_DiscoverShortlistAnnouncement_09-27.jpg"
				alt="Six books are shown as a display."
			/>
		</>
	);
};

export default Banner;

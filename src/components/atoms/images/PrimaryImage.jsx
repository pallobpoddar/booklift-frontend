import React from "react";

const PrimaryImage = ({ StyledImage, src, alt }) => {
	return (
		<StyledImage
			src={src}
			alt={alt}
		/>
	);
};

export default PrimaryImage;

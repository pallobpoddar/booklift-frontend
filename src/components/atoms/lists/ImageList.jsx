import React from "react";

const ImageList = ({ StyledCartImage, src }) => {
	return (
		<li>
			{" "}
			<StyledCartImage src={src} />{" "}
		</li>
	);
};

export default ImageList;

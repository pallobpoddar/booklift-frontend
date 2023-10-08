import React from "react";

const PrimaryImage = ({ imageStyle, src, alt }) => {
	return <img className={imageStyle} src={src} alt={alt} />;
};

export default PrimaryImage;

import PropTypes from "prop-types";

const Button = ({ StyledButton, text, type, onClick }) => {
	return (
		<StyledButton
			type={type}
			onClick={onClick}>
			{text}
		</StyledButton>
	);
};

Button.propTypes = {
	StyledButton: PropTypes.elementType.isRequired,
	text: "string",
	type: "submit",
	onClick: "function",
};

export default Button;

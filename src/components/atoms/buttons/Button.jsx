import PropTypes from "prop-types";

const Button = ({ StyledButton, type, onClick, children }) => {
	return (
		<StyledButton
			type={type}
			onClick={onClick}>
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	StyledButton: PropTypes.elementType.isRequired,
	children: PropTypes.elementType,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;

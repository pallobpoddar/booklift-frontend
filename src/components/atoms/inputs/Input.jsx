import PropTypes from "prop-types";

const Input = ({
	StyledInput,
	type,
	placeholder,
	autoFocus,
	field,
	style,
}) => {
	return (
		<StyledInput
			type={type}
			placeholder={placeholder}
			autoFocus={autoFocus}
			{...field}
			style={style}
		/>
	);
};

Input.propTypes = {
  StyledInput: PropTypes.elementType.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
	autoFocus: PropTypes.bool,
  field: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default Input;

import PropTypes from "prop-types";

const ValidationInput = ({
	type,
	StyledFormInput,
	placeholder,
	field,
	style,
}) => {
	return (
		<StyledFormInput
			type={type}
			placeholder={placeholder}
			{...field}
			style={style}
		/>
	);
};

ValidationInput.propTypes = {
  type: PropTypes.string,
  StyledFormInput: PropTypes.elementType.isRequired,
  placeholder: PropTypes.string,
  field: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default ValidationInput;

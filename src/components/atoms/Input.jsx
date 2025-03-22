const Input = ({ StyledInput, type, placeholder, field, style }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      {...field}
      style={style}
    />
  );
};

export default Input;

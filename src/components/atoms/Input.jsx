/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import VisibilityIcon from "/src/assets/icons/visibility.svg?react";
import VisibilityOffIcon from "/src/assets/icons/visibility-off.svg?react";

const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledVisibilityIconWrapper = styled.span`
  position: absolute;
  right: 12px;
  cursor: pointer;
`;

const Input = ({
  StyledInput,
  type,
  placeholder,
  autocomplete,
  includePasswordIcon,
  field,
  error,
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <StyledInputWrapper>
      <StyledInput
        type={inputType}
        placeholder={placeholder}
        autoComplete={autocomplete}
        {...field}
        style={error && { border: "1px solid red" }}
      />
      {includePasswordIcon && (
        <StyledVisibilityIconWrapper onClick={togglePasswordVisibility}>
          {inputType === "password" ? (
            <VisibilityOffIcon />
          ) : (
            <VisibilityIcon />
          )}
        </StyledVisibilityIconWrapper>
      )}
    </StyledInputWrapper>
  );
};

export default Input;

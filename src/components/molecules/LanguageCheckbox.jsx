import React from "react";
import Header3 from "../atoms/labels/Header3";
import CheckboxInput from "../atoms/inputs/CheckboxInput";
import { StyledHeader3 } from "../../App.styles";

const LanguageCheckbox = ({ StyledFilterSection, handleLanguageChange }) => {
	return (
		<StyledFilterSection>
			<Header3
				StyledHeader3={StyledHeader3}
				text="Language"
			/>
			<div>
				<CheckboxInput
					type="checkbox"
					value="English"
					onChange={handleLanguageChange}
				/>{" "}
				English
			</div>
			<div>
				<CheckboxInput
					type="checkbox"
					value="Portugese"
					onChange={handleLanguageChange}
				/>{" "}
				Portuguese
			</div>
		</StyledFilterSection>
	);
};

export default LanguageCheckbox;

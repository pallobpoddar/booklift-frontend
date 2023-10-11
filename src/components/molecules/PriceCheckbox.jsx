import React from "react";
import Header3 from "../atoms/labels/Header3";
import CheckboxInput from "../atoms/inputs/CheckboxInput";
import { StyledHeader3 } from "../../App.styles";

const PriceCheckbox = ({ StyledFilterSection, handlePriceChange }) => {
	return (
		<StyledFilterSection>
			<Header3
				StyledHeader3={StyledHeader3}
				text="Price"
			/>
			<div>
				<CheckboxInput
					type="checkbox"
					value="0-300"
					onChange={handlePriceChange}
				/>{" "}
				0 - 300
			</div>
			<div>
				<CheckboxInput
					type="checkbox"
					value="301-600"
					onChange={handlePriceChange}
				/>{" "}
				301 - 600
			</div>
		</StyledFilterSection>
	);
};

export default PriceCheckbox;

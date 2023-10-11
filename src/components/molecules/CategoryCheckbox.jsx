import React from "react";
import Header3 from "../atoms/labels/Header3";
import CheckboxInput from "../atoms/inputs/CheckboxInput";
import { StyledHeader3 } from "../../App.styles";

const CategoryCheckBox = ({ StyledFilterSection, handleCategoryChange }) => {
	return (
		<StyledFilterSection>
			<Header3
				StyledHeader3={StyledHeader3}
				text="Category"
			/>
			<div>
				<CheckboxInput
					type="checkbox"
					value="Fantasy"
					onChange={handleCategoryChange}
				/>{" "}
				Fantasy
			</div>
			<div>
				<CheckboxInput
					type="checkbox"
					value="Fiction"
					onChange={handleCategoryChange}
				/>{" "}
				Fiction
			</div>
		</StyledFilterSection>
	);
};

export default CategoryCheckBox;

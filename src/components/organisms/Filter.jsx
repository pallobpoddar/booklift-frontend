import { React, useState } from "react";
import CategoryCheckbox from "../molecules/CategoryCheckbox";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import LanguageCheckbox from "../molecules/LanguageCheckbox";
import PriceCheckbox from "../molecules/PriceCheckbox";
import { StyledFilterPanel, StyledFilterSection } from "./Filter.styles";
import "../../App.scss";

const Filter = () => {
	const [category, setCategory] = useState([]);
	const [language, setLanguage] = useState([]);
	const [price, setPrice] = useState([]);

	const handleCategoryChange = (event) => {
		const category = event.target.value;
		setCategory((prevSelected) =>
			event.target.checked
				? [...prevSelected, category]
				: prevSelected.filter((item) => item !== category)
		);
	};

	const handleLanguageChange = (event) => {
		const language = event.target.value;
		setLanguage((prevSelected) =>
			event.target.checked
				? [...prevSelected, language]
				: prevSelected.filter((item) => item !== language)
		);
	};

	const handlePriceChange = (event) => {
		const price = event.target.value;
		setPrice((prevSelected) =>
			event.target.checked
				? [...prevSelected, price]
				: prevSelected.filter((item) => item !== price)
		);
	};

	const handlerOnSubmit = () => {
		console.log("Selected Categories:", category);
		console.log("Selected Brands:", language);
		console.log("Selected Prices:", price);
	};

	return (
		<StyledFilterPanel onSubmit={handlerOnSubmit}>
			<CategoryCheckbox
				StyledFilterSection={StyledFilterSection}
				handleCategoryChange={handleCategoryChange}
			/>
			<LanguageCheckbox
				StyledFilterSection={StyledFilterSection}
				handleLanguageChange={handleLanguageChange}
			/>
			<PriceCheckbox
				StyledFilterSection={StyledFilterSection}
				handlePriceChange={handlePriceChange}
			/>
			<PrimaryButton
				buttonStyle="primaryButton"
				text="Filter"
				type="submit"
			/>
		</StyledFilterPanel>
	);
};

export default Filter;

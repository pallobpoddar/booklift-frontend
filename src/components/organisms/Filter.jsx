import { React } from "react";
import { useForm, Controller } from "react-hook-form";
import CategoryCheckbox from "../molecules/CategoryCheckbox";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import LanguageCheckbox from "../molecules/LanguageCheckbox";
import PriceCheckbox from "../molecules/PriceCheckbox";
import { StyledFilterPanel, StyledFilterSection } from "./Filter.styles";
import "../../App.scss";
import CheckboxInput from "../atoms/inputs/CheckboxInput";

const Filter = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			category: "",
			language: "",
			price: "",
		},
	});

	const handlerOnSubmit = () => {
		const formData = {
			category: getValues("category"),
			language: getValues("language"),
			price: getValues("price"),
		};
		console.log(formData);
	};

	return (
		<StyledFilterPanel onSubmit={handleSubmit(handlerOnSubmit)}>
			<StyledFilterSection>
				<Controller
					name="category"
					control={control}
					render={({ field }) => (
						<CheckboxInput type="checkbox" field={field} />
					)}
				/>{" "}
				Fantasy
			</StyledFilterSection>
			<StyledFilterSection>
				<Controller
					name="language"
					control={control}
					render={({ field }) => (
						<CheckboxInput type="checkbox" field={field} />
					)}
				/>
			</StyledFilterSection>
			<StyledFilterSection>
				<Controller
					name="price"
					control={control}
					render={({ field }) => (
						<CheckboxInput type="checkbox" field={field} />
					)}
				/>
			</StyledFilterSection>

			{/* <CategoryCheckbox
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
			/> */}
			<PrimaryButton
				buttonStyle="primaryButton"
				text="Filter"
				type="submit"
			/>
		</StyledFilterPanel>
	);
};

export default Filter;

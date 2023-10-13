import { React } from "react";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import CheckboxInput from "../atoms/inputs/CheckboxInput";
import Header3 from "../atoms/labels/Header3";
import { StyledFilterPanel, StyledFilterSection } from "./Filter.styles";
import { StyledHeader3 } from "../../App.styles";
import "../../App.scss";

const Filter = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			fantasy: "",
			fiction: "",
			english: "",
			french: "",
			price300: "",
			price600: "",
		},
	});

	const handlerOnSubmit = (data) => {
		const formData = {
			fantasy: getValues("fantasy"),
			fiction: getValues("fiction"),
			english: getValues("english"),
			french: getValues("french"),
			price300: getValues("price300"),
			price600: getValues("price600"),
		};
		console.log(formData);
	};

	return (
		<StyledFilterPanel onSubmit={handleSubmit(handlerOnSubmit)}>
			<StyledFilterSection>
				<Header3 StyledHeader3={StyledHeader3} text="Category" />
				<div>
					<Controller
						name="fantasy"
						control={control}
						render={({ field }) => (
							<>
								<CheckboxInput
									type="checkbox"
									field={field}
									value="Fantasy"
								/>
								<label>Fantasy</label>
							</>
						)}
					/>
				</div>
				<div>
					<Controller
						name="fiction"
						control={control}
						render={({ field }) => (
							<>
								<CheckboxInput
									type="checkbox"
									field={field}
									value="Fiction"
								/>
								<label>Fiction</label>
							</>
						)}
					/>
				</div>
			</StyledFilterSection>
			<StyledFilterSection>
				<Header3 StyledHeader3={StyledHeader3} text="Language" />
				<div>
					<Controller
						name="english"
						control={control}
						render={({ field }) => (
							<>
								<CheckboxInput
									type="checkbox"
									field={field}
									value="English"
								/>
								<label>English</label>
							</>
						)}
					/>
				</div>
				<div>
					<Controller
						name="french"
						control={control}
						render={({ field }) => (
							<>
								<CheckboxInput
									type="checkbox"
									field={field}
									value="French"
								/>
								<label>French</label>
							</>
						)}
					/>
				</div>
			</StyledFilterSection>
			<StyledFilterSection>
				<Header3 StyledHeader3={StyledHeader3} text="Price" />
				<div>
					<Controller
						name="price300"
						control={control}
						render={({ field }) => (
							<>
								<CheckboxInput
									type="checkbox"
									field={field}
									value="300"
								/>
								<label>0 - 300</label>
							</>
						)}
					/>
				</div>
				<div>
					<Controller
						name="price600"
						control={control}
						render={({ field }) => (
							<>
								<CheckboxInput
									type="checkbox"
									field={field}
									value="600"
								/>
								<label>301 - 600</label>
							</>
						)}
					/>
				</div>
			</StyledFilterSection>
			<PrimaryButton
				buttonStyle="primaryButton"
				text="Filter"
				type="submit"
			/>
		</StyledFilterPanel>
	);
};

export default Filter;

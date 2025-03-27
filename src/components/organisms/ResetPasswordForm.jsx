import { useForm, Controller } from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { BeatLoader } from "react-spinners";
import {
  StyledForm,
  StyledButton,
  StyledFormError,
  StyledInput,
} from "../../App.styles";

const ResetPasswordForm = ({ isLoading, onFormSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      newPassword: "",
    },
  });

  const handlerOnSubmit = () => {
    const formData = {
      newPassword: getValues("newPassword"),
    };

    onFormSubmit(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
      <div>
        <Controller
          name="newPassword"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Character limit exceeded",
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/])[A-Za-z\d~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]{8,20}$/,
              message:
                "Password must contain 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol",
            },
          }}
          render={({ field }) => (
            <Input
              StyledInput={StyledInput}
              placeholder="Enter a new password"
              type="password"
              autocomplete={"new-password"}
              includePasswordIcon={true}
              field={field}
              error={errors.password && true}
            />
          )}
        />

        {errors.password && (
          <StyledFormError>{errors.password.message}</StyledFormError>
        )}
      </div>

      <Button StyledButton={StyledButton}>
        {isLoading ? <BeatLoader color="white" size={8} /> : "Reset"}
      </Button>
    </StyledForm>
  );
};

export default ResetPasswordForm;

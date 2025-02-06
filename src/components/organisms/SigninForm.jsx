import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../atoms/inputs/Input";
import Button from "../atoms/buttons/Button";
import authApi from "../../api/authApi";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import {
  StyledForm,
  StyledFormError,
  StyledInput,
  StyledButton,
} from "../../App.styles";

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const showAlert = (data) => {
    if (!data.success) {
      toast.error(data.message, {
        theme: "colored",
      });
    }
  };

  const handlerOnSubmit = async () => {
    const formData = {
      email: getValues("email"),
      password: getValues("password"),
    };

    setIsLoading(true);

    try {
      const response = await authApi.signIn(formData);
      dispatch(signIn(response.data.data));
      response.data.data.role === "Admin" ? navigate("/admin") : navigate("/");
    } catch (error) {
      showAlert(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
      <div>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            maxLength: {
              value: 320,
              message: "Invalid email format",
            },
          }}
          render={({ field }) => (
            <Input
              type="text"
              StyledInput={StyledInput}
              placeholder="Email"
              field={field}
              style={{
                border: errors.email ? "1px solid red" : "",
              }}
            />
          )}
        />

        {errors.email && (
          <StyledFormError>{errors.email.message}</StyledFormError>
        )}
      </div>

      <div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            maxLength: {
              value: 20,
              message: "Character limit exceeded",
            },
          }}
          render={({ field }) => (
            <Input
              type="password"
              StyledInput={StyledInput}
              placeholder="Password"
              field={field}
              style={{
                border: errors.password ? "1px solid red" : "",
              }}
            />
          )}
        />

        {errors.password && (
          <StyledFormError>{errors.password.message}</StyledFormError>
        )}
      </div>

      <Button StyledButton={StyledButton} type="submit">
        {isLoading ? <BeatLoader color="white" size={8} /> : "SIGN IN"}
      </Button>
    </StyledForm>
  );
};

export default SigninForm;

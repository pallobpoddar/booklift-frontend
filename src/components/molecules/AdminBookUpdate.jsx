import { React, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useBook from "../../hooks/useBook";
import ValidationInput from "../atoms/inputs/ValidationInput";
import PrimaryButton from "../atoms/buttons/Button";

import {
  StyledForm,
  StyledFormRow,
  StyledFormError,
  StyledFormInput,
} from "../../App.styles";

const AdminBookUpdate = ({ action }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      author: "",
      description: "",
      price: "",
      year: "",
      language: "",
      isbn: "",
      category: "",
      stock: "",
    },
  });

  const { addBook, updateBook } = useBook();

  const handlerOnSubmit = () => {
    const formData = {
      id: getValues("id"),
      title: getValues("title"),
      author: getValues("author"),
      description: getValues("description"),
      price: getValues("price"),
      year: getValues("year"),
      language: getValues("language"),
      isbn: getValues("isbn"),
      category: getValues("category"),
      stock: getValues("stock"),
    };
    if (action === "add") {
      addBook(formData);
    } else if (action === "update") {
      updateBook(formData);
    }
  };

  useEffect(() => {}, [errors]);

  return (
    <StyledForm onSubmit={handleSubmit(handlerOnSubmit)}>
      <StyledFormRow>
        <Controller
          name="id"
          control={control}
          rules={{
            required: "Id is required",
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Id"
              field={field}
              style={{
                border: errors.id ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.id && <p>{errors.id.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="title"
          control={control}
          rules={{
            required: "Title is required",
            maxLength: {
              value: 100,
              message: "Maximum length is 100",
            },
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Title"
              field={field}
              style={{
                border: errors.title ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.title && <p>{errors.title.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="author"
          control={control}
          rules={{
            required: "Author is required",
            maxLength: {
              value: 30,
              message: "Maximum length is 30",
            },
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Author"
              field={field}
              style={{
                border: errors.author ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.author && <p>{errors.author.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="year"
          control={control}
          rules={{
            required: "Year is required",
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Year"
              field={field}
              style={{
                border: errors.year ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.year && <p>{errors.year.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="description"
          control={control}
          rules={{
            required: "Description is required",
            maxLength: {
              value: 1000,
              message: "Maximum length is 1000",
            },
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Description"
              field={field}
              style={{
                border: errors.description ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.description && <p>{errors.description.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="language"
          control={control}
          rules={{
            required: "Language is required",
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Language"
              field={field}
              style={{
                border: errors.language ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.language && <p>{errors.language.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="category"
          control={control}
          rules={{
            required: "Category is required",
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Category"
              field={field}
              style={{
                border: errors.category ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.category && <p>{errors.category.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="isbn"
          control={control}
          rules={{
            required: "ISBN is required",
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="ISBN"
              field={field}
              style={{
                border: errors.isbn ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.isbn && <p>{errors.isbn.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="price"
          control={control}
          rules={{
            required: "Price is required",
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Price"
              field={field}
              style={{
                border: errors.price ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.price && <p>{errors.price.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <Controller
          name="stock"
          control={control}
          rules={{
            required: "Stock is required",
          }}
          render={({ field }) => (
            <ValidationInput
              type="text"
              StyledFormInput={StyledFormInput}
              placeholder="Stock"
              field={field}
              style={{
                border: errors.stock ? "1px solid red" : "",
              }}
            />
          )}
        />
      </StyledFormRow>

      <StyledFormError>
        {errors.stock && <p>{errors.stock.message}</p>}
      </StyledFormError>

      <StyledFormRow>
        <PrimaryButton
          buttonStyle="primaryButton"
          text="Update"
          type="submit"
        />
      </StyledFormRow>
    </StyledForm>
  );
};

export default AdminBookUpdate;

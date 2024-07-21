import * as Yup from "yup";

export const createCompanyServiceValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long")
    .trim(),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long")
    .trim(),
  image: Yup.string()
    .required("Image is required")
    .url("Image must be a valid URL"),
});

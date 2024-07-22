import * as yup from "yup";

export const createStaffValidationSchema = yup.object({
  createUserInput: yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  }),
  createUserProfileInput: yup.object({
    firstName: yup.string().required("First name is required"),
    phone: yup.string().required("Phone number is required"),
    specialization: yup.string().required("Specialization is required"),
  }),
});

import * as yup from "yup";

export const createStaffServiceValidationSchema = yup.object({
  description: yup.string().optional(),
  duration: yup
    .number()
    .required("Duration is required")
    .positive("Duration must be a positive number"),
  id: yup.number().optional(),
  image: yup.string().optional(),
  order: yup.number().optional(),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  serviceId: yup.number().required("Service is required"),
  title: yup.string().optional(),
});

import * as yup from "yup";
import { CreateAppointmentMutationVariables } from "../../../../../api/__generated__/graphql";

export const appointmentValidationSchema = yup.object().shape({
  createAppointmentInput: yup.object().shape({
    targetTime: yup.date().required("Date is required"),
  }),
  customerDataInput: yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    firstName: yup.string().required("First name is required"),
    phone: yup.string().required("Phone number is required"),
  }),
});

export const appointmentInitialValues: CreateAppointmentMutationVariables = {
  createAppointmentInput: {
    staffId: 0,
    staffServiceId: 0,
    targetTime: null,
  },
  customerDataInput: {
    email: "",
    firstName: "",
    phone: "",
  },
};

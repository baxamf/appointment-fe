import { Formik } from "formik";
import { useCreateAppointment } from "../hooks/useCreateAppointment";

import AppointmentForm from "./AppointmentForm";
import {
  appointmentInitialValues,
  appointmentValidationSchema,
} from "../utils/formik/appointment-formik-values";

export default function AppointmentFormProvider() {
  const { onSubmit } = useCreateAppointment();

  return (
    <Formik
      initialValues={appointmentInitialValues}
      validationSchema={appointmentValidationSchema}
      onSubmit={onSubmit}
    >
      <AppointmentForm />
    </Formik>
  );
}

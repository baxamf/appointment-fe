import { Formik } from "formik";
import { useCreateAppointment } from "../hooks/useCreateAppointment";

import AppointmentForm from "./AppointmentForm";
import {
  appointmentInitialValues,
  appointmentValidationSchema,
} from "../utils/formik/appointment-formik-values";
import ErrorPage from "../../../../pages/Error";

export default function AppointmentFormProvider() {
  const { onSubmit, errorMessage } = useCreateAppointment();

  return (
    <Formik
      initialValues={appointmentInitialValues}
      validationSchema={appointmentValidationSchema}
      onSubmit={onSubmit}
    >
      <>
        <AppointmentForm />
        {errorMessage && <ErrorPage message={errorMessage} />}
      </>
    </Formik>
  );
}

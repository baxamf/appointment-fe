import { Formik } from "formik";
import { useCreateAppointment } from "../hooks/useCreateAppointment";

import AppointmentFormView from "./AppointmentFormView";
import {
  appointmentInitialValues,
  appointmentValidationSchema,
} from "../utils/formik/appointment-formik-values";
import ErrorPage from "../../../../common/pages/Error";

export default function AppointmentFormProvider() {
  const { onSubmit, errorMessage } = useCreateAppointment();

  return (
    <Formik
      initialValues={appointmentInitialValues}
      validationSchema={appointmentValidationSchema}
      onSubmit={onSubmit}
    >
      <>
        <AppointmentFormView />
        {errorMessage && <ErrorPage message={errorMessage} />}
      </>
    </Formik>
  );
}

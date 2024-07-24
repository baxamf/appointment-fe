import AppointmentProvider from "../context/AppointmentProvider";
import AppointmentFormProvider from "./AppointmentFormProvider";

export default function MakeAppointment() {
  return (
    <AppointmentProvider>
      <AppointmentFormProvider />
    </AppointmentProvider>
  );
}

import { Flex } from "antd";
import AppointmentFormSetMainService from "./AppointmentFormSetMainService";
import AppointmentFormSetArtist from "./AppointmentFormSetArtist";
import AppointmentFormSetDate from "./AppointmentFormSetDate";
import { useAppointmentFormControls } from "../hooks/useAppointmentFormControls";

export default function AppointmentForm() {
  const { view } = useAppointmentFormControls();

  return (
    <Flex style={{ alignItems: "center" }}>
      {view.showMainServicesScreen && <AppointmentFormSetMainService />}
      {view.showArtistsScreen && <AppointmentFormSetArtist />}
      {view.showDateInfoScreen && <AppointmentFormSetDate />}
    </Flex>
  );
}

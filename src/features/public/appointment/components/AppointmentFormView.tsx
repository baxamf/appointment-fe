import { Flex } from "antd";
import AppointmentFormSetMainService from "./AppointmentFormSetMainService";
import AppointmentFormSetArtist from "./AppointmentFormSetArtist";
import AppointmentFormSetDate from "./AppointmentFormSetDate";
import { useAppointmentFormControls } from "../hooks/useAppointmentFormControls";
import AppointmentFormSetDetailInfo from "./AppointmentFormSetDetailInfo";

export default function AppointmentFormView() {
  const { view } = useAppointmentFormControls();

  return (
    <Flex className="w-full items-center justify-center">
      {view.showMainServicesScreen && <AppointmentFormSetMainService />}
      {view.showArtistsScreen && <AppointmentFormSetArtist />}
      {view.showDateScreen && <AppointmentFormSetDate />}
      {view.showInfoScreen && <AppointmentFormSetDetailInfo />}
    </Flex>
  );
}

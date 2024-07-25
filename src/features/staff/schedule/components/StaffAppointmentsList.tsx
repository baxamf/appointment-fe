import { DatePicker, Flex } from "antd";
import dayjs from "dayjs";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { useGetMyStaffAppointments } from "../hooks/useGetMyStaffAppointments";
import StaffAppointmentCard from "./ui/StaffAppointmentCard";

export default function StaffAppointmentsList() {
  const {
    appointments,
    appointmentLoading,
    appointmentErrorMessage,
    getAppointments,
  } = useGetMyStaffAppointments();

  if (appointmentLoading) return <Loading />;

  if (appointmentErrorMessage)
    return <ErrorPage message={appointmentErrorMessage} />;

  if (appointments)
    return (
      <Flex gap="2vh" vertical>
        <DatePicker
          style={{ width: "200px" }}
          onChange={getAppointments}
          defaultValue={dayjs()}
        />

        {appointments.map((appointment) => (
          <StaffAppointmentCard key={appointment.id} {...appointment} />
        ))}
      </Flex>
    );
}

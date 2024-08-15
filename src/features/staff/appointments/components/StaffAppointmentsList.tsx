import { DatePicker, Flex } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import { useGetMyStaffAppointments } from "../hooks/useGetMyStaffAppointments";
import StaffAppointmentCard from "./ui/StaffAppointmentCard";

export default function StaffAppointmentsList() {
  const {
    targetTime,
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
      <Flex className="flex-col gap-[2vh]">
        <DatePicker
          allowClear={false}
          size="large"
          className="w-48 py-2.5"
          onChange={getAppointments}
          defaultValue={targetTime}
        />

        {appointments.map((appointment) => (
          <StaffAppointmentCard key={appointment.id} {...appointment} />
        ))}
      </Flex>
    );
}

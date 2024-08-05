import { DatePicker, Flex } from "antd";
import dayjs from "dayjs";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import { useGetAllAppointments } from "../hooks/useGetAllAppointments";
import AdminAppointmentCard from "./ui/AdminAppointmentCard";

export default function AdminAppointmentsList() {
  const {
    appointments,
    appointmentLoading,
    appointmentErrorMessage,
    getAppointments,
  } = useGetAllAppointments();

  if (appointmentLoading) return <Loading />;

  if (appointmentErrorMessage)
    return <ErrorPage message="appointmentErrorMessage" />;

  if (appointments)
    return (
      <Flex className="flex-wrap gap-[2vw]">
        <div className="w-full">
          <DatePicker
            allowClear={false}
            size="large"
            className="w-48 py-2.5"
            onChange={getAppointments}
            defaultValue={dayjs()}
          />
        </div>

        {appointments.map((appointment) => (
          <AdminAppointmentCard key={appointment.id} {...appointment} />
        ))}
      </Flex>
    );
}

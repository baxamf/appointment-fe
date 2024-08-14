import { useQuery } from "@apollo/client";
import { GET_MY_STAFF_APPOINTMENTS } from "../graphql";
import dayjs from "dayjs";

export function useGetMyStaffAppointments() {
  const { data, loading, error, refetch } = useQuery(
    GET_MY_STAFF_APPOINTMENTS,
    {
      variables: {
        getAppointmentFilterInput: {
          targetTime: dayjs().startOf("day"),
        },
      },
    }
  );

  const getAppointments = async (targetTime: dayjs.Dayjs) => {
    await refetch({
      getAppointmentFilterInput: {
        targetTime: targetTime || dayjs(),
      },
    });
  };

  return {
    appointments: data?.getMyAppointments,
    appointmentLoading: loading,
    appointmentErrorMessage: error?.message,
    getAppointments,
  };
}

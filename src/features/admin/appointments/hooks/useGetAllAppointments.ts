import { useQuery } from "@apollo/client";
import { GET_ALL_APPOINTMENTS } from "../graphql";
import dayjs from "dayjs";

export function useGetAllAppointments() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_APPOINTMENTS, {
    variables: {
      getAppointmentFilterInput: { targetTime: dayjs().startOf("day") },
    },
  });

  const getAppointments = async (targetTime: dayjs.Dayjs) => {
    await refetch({
      getAppointmentFilterInput: {
        targetTime: targetTime || dayjs(),
      },
    });
  };

  return {
    appointments: data?.getAllAppointments,
    appointmentLoading: loading,
    appointmentErrorMessage: error?.message,
    getAppointments,
  };
}

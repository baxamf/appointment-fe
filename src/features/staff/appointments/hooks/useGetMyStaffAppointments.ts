import { useQuery } from "@apollo/client";
import { GET_MY_STAFF_APPOINTMENTS } from "../graphql";
import dayjs from "dayjs";
import { useStaffContext } from "../../../../store/hooks/useStaffContext";

export function useGetMyStaffAppointments() {
  const {
    staffStore: { targetTime },
  } = useStaffContext();

  const { data, loading, error, refetch } = useQuery(
    GET_MY_STAFF_APPOINTMENTS,
    {
      variables: {
        getAppointmentFilterInput: {
          targetTime: targetTime || dayjs().startOf("day"),
        },
      },
    }
  );

  const getAppointments = async (targetTime: dayjs.Dayjs) => {
    await refetch({
      getAppointmentFilterInput: {
        targetTime: targetTime || dayjs().startOf("day"),
      },
    });
  };

  return {
    appointments: data?.getMyAppointments,
    appointmentLoading: loading,
    appointmentErrorMessage: error?.message,
    targetTime,
    getAppointments,
  };
}

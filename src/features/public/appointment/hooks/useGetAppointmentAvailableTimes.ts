import { useLazyQuery } from "@apollo/client";
import { GET_APPOINTMENT_AVAILABLE_TIMES } from "../graphql";
import dayjs from "dayjs";
import { useFormikContext } from "formik";
import { CreateAppointmentMutationVariables } from "../../../../api/__generated__/graphql";

export function useGetAppointmentAvailableTimes() {
  const [getTimes, { data, loading, error }] = useLazyQuery(
    GET_APPOINTMENT_AVAILABLE_TIMES
  );
  const {
    values: { createAppointmentInput },
    setFieldValue,
  } = useFormikContext<CreateAppointmentMutationVariables>();

  const getTargetTimes = async (date: dayjs.Dayjs) => {
    setFieldValue("createAppointmentInput.targetTime", null);

    await getTimes({
      variables: {
        getAppointmentAvailableTimesInput: {
          targetTime: date,
          staffId: createAppointmentInput.staffId,
          staffServiceId: createAppointmentInput.staffServiceId,
        },
      },
    });
  };

  return {
    getTargetTimes,
    targetTimes: data?.getAppointmentAvailableTimes,
    loading,
    errorMessage: error?.message,
  };
}

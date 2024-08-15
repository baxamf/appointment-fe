import { useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { GET_MY_SCHEDULE } from "../graphql";
import { useStaffContext } from "../../../../store/hooks/useStaffContext";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";
import { useMemo } from "react";

export function useMySchedule() {
  const navigate = useNavigate();
  const { setTargetTime } = useStaffContext();
  const { data, loading, error } = useQuery(GET_MY_SCHEDULE);

  const workingDays = useMemo(
    () => data?.getMySchedule.map(({ day }) => day),
    [data]
  );

  const onSelect = (date: dayjs.Dayjs) => {
    setTargetTime(date), navigate(RoutePaths.STAFF_APPOINTMENTS);
  };

  const disabledDate = (day: dayjs.Dayjs) =>
    !workingDays?.includes(day.get("day"));

  return {
    workingDays,
    schedule: data?.getMySchedule,
    loading,
    errorMessage: error?.message,
    onSelect,
    disabledDate,
  };
}

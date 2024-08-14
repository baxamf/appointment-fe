import { useQuery } from "@apollo/client";
import { GET_MY_SCHEDULE } from "../graphql";

export function useGetMySchedule() {
  const { data, loading, error } = useQuery(GET_MY_SCHEDULE);

  return {
    workingDays: data?.getMySchedule.map(({ day }) => day),
    schedule: data?.getMySchedule,
    loading,
    errorMessage: error?.message,
  };
}

import { useQuery } from "@apollo/client";
import { GET_STAFF_WORKING_DAYS } from "../graphql";
import { useParams } from "react-router-dom";

export function useGetStaffWorkingDays() {
  const { staffId } = useParams();

  const { data, loading, error } = useQuery(GET_STAFF_WORKING_DAYS, {
    variables: {
      userId: Number(staffId),
    },
  });

  return {
    workingDays: data?.getUserWorkingDays,
    workingDaysLoading: loading,
    workingDaysErrorMessage: error?.message,
  };
}

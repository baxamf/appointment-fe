import { InternalRefetchQueryDescriptor, useMutation } from "@apollo/client";
import {
  GET_STAFF_WORKING_DAYS,
  REMOVE_STAFF_WORKING_DAY,
  UPDATE_STAFF_WORKING_DAY,
} from "../graphql";
import { UpdateUserWorkingDayInput } from "../../../../api/__generated__/graphql";
import { useParams } from "react-router-dom";

export function useMutateStaffWorkingDay() {
  const { staffId } = useParams();

  const refetchQueries: InternalRefetchQueryDescriptor[] = [
    {
      query: GET_STAFF_WORKING_DAYS,
      variables: { userId: Number(staffId) },
    },
  ];

  const [update, { loading, error }] = useMutation(UPDATE_STAFF_WORKING_DAY, {
    refetchQueries,
  });

  const [remove] = useMutation(REMOVE_STAFF_WORKING_DAY, {
    refetchQueries,
  });

  const updateWorkingDay = async (
    userWorkingDayId: number,
    updateUserWorkingDayInput: UpdateUserWorkingDayInput
  ) => {
    await update({
      variables: { userWorkingDayId, updateUserWorkingDayInput },
    });
  };

  const removeWorkingDay = async (userWorkingDayId: number) => {
    await remove({ variables: { userWorkingDayId } });
  };

  return {
    updateWorkingDay,
    removeWorkingDay,
    loading,
    errorMessage: error?.message,
  };
}

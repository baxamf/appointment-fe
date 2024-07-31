import { useMutation } from "@apollo/client";
import { CREATE_STAFF_WORKING_DAY, GET_STAFF_WORKING_DAYS } from "../graphql";
import { CreateUserWorkingDayInput } from "../../../../api/__generated__/graphql";
import { FormikHelpers } from "formik";
import { useParams } from "react-router-dom";

export function useAddStaffWorkingDay() {
  const { staffId } = useParams();

  const [create, { loading, error }] = useMutation(CREATE_STAFF_WORKING_DAY, {
    refetchQueries: [
      {
        query: GET_STAFF_WORKING_DAYS,
        variables: { userId: Number(staffId) },
      },
    ],
  });

  const addWorkingDay = async (
    createUserWorkingDayInput: CreateUserWorkingDayInput,
    formikHelpers: FormikHelpers<CreateUserWorkingDayInput>
  ) => {
    await create({
      variables: {
        createUserWorkingDayInput,
      },
    });

    formikHelpers.resetForm();
  };

  return { addWorkingDay, loading, errorMessage: error?.message };
}

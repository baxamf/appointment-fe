import { useMutation } from "@apollo/client";
import { CREATE_STAFF_WORKING_DAY } from "../graphql";
import { CreateUserWorkingDayInput } from "../../../../api/__generated__/graphql";
import { FormikHelpers } from "formik";

export function useAddStaffWorkingDay() {
  const [create, { loading, error }] = useMutation(CREATE_STAFF_WORKING_DAY);

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

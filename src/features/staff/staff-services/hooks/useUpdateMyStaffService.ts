import { useMutation } from "@apollo/client";
import { UPDATE_MY_STAFF_SERVICE } from "../graphql";
import { useParams } from "react-router-dom";
import { UpdateStaffServiceInput } from "../../../../api/__generated__/graphql";
import { FormikHelpers } from "formik";

export function useUpdateMyStaffService() {
  const { staffServiceId } = useParams();

  const [update, { loading: updateLoading, error: updateError }] = useMutation(
    UPDATE_MY_STAFF_SERVICE
  );

  const updateMyStaffService = async (
    updateStaffServiceInput: UpdateStaffServiceInput,
    actions: FormikHelpers<UpdateStaffServiceInput>
  ) => {
    const { data } = await update({
      variables: {
        staffServiceId: Number(staffServiceId),
        updateStaffServiceInput,
      },
    });

    if (data?.updateStaffService) {
      actions.resetForm({ values: data.updateStaffService });
    }
  };

  return { updateMyStaffService, updateLoading, updateError };
}

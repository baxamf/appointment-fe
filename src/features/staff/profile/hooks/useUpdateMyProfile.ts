import { useMutation } from "@apollo/client";
import { UPDATE_MY_PROFILE } from "../graphql";
import { UpdateUserProfileInput } from "../../../../api/__generated__/graphql";
import { FormikHelpers } from "formik";

export function useUpdateMyProfile() {
  const [update, { error }] = useMutation(UPDATE_MY_PROFILE);

  const updateProfile = async (
    updateUserProfileInput: UpdateUserProfileInput,
    actions: FormikHelpers<UpdateUserProfileInput>
  ) => {
    const { data } = await update({
      variables: { updateUserProfileInput },
    });

    if (data?.updateMyProfile) {
      actions.resetForm({ values: data.updateMyProfile });
    }
  };

  return {
    updateProfile,
    errorMessage: error?.message,
  };
}

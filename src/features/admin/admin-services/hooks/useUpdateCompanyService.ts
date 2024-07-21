import { useMutation } from "@apollo/client";
import { UPDATE_COMPANY_SERVICE } from "../graphql";
import { useParams } from "react-router-dom";
import { UpdateCompanyServiceInput } from "../../../../api/__generated__/graphql";
import { FormikHelpers } from "formik";
import { FormMutationHookReturnType } from "../../../../common/types/form";

export function useUpdateCompanyService(): FormMutationHookReturnType<UpdateCompanyServiceInput> {
  const { companyServiceId } = useParams();

  const [update, { loading, error }] = useMutation(UPDATE_COMPANY_SERVICE);

  const submitFormHandler = async (
    updateCompanyServiceInput: UpdateCompanyServiceInput,
    actions: FormikHelpers<UpdateCompanyServiceInput>
  ) => {
    const { data } = await update({
      variables: {
        companyServiceId: Number(companyServiceId),
        updateCompanyServiceInput,
      },
    });

    if (data?.updateCompanyService) {
      const { title, description, image } = data.updateCompanyService;

      actions.resetForm({ values: { title, description, image } });
    }
  };

  return {
    submitFormHandler,
    error: !!error,
    errorMessage: error?.message,
    submitDisabled: loading,
  };
}

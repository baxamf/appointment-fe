import { useMutation } from "@apollo/client";
import { UPDATE_COMPANY_SERVICE } from "../graphql";
import { useParams } from "react-router-dom";
import { UpdateCompanyServiceInput } from "../../../../api/__generated__/graphql";
import { FormikHelpers } from "formik";

export function useUpdateCompanyService() {
  const { companyServiceId } = useParams();

  const [update, { loading: updateLoading, error: updateError }] = useMutation(
    UPDATE_COMPANY_SERVICE
  );

  const updateCompanyService = async (
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

  return { updateCompanyService, updateLoading, updateError };
}

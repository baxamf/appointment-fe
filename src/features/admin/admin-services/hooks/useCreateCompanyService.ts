import { useMutation } from "@apollo/client";
import { CREATE_COMPANY_SERVICE } from "../graphql";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";
import { CreateCompanyServiceInput } from "../../../../api/__generated__/graphql";
import { FormMutationHookReturnType } from "../../../../common/types/form";

export function useCreateCompanyService(): FormMutationHookReturnType<CreateCompanyServiceInput> {
  const navigate = useNavigate();

  const [create, { loading, error }] = useMutation(CREATE_COMPANY_SERVICE, {
    onCompleted(data) {
      navigate(`${RoutePaths.ADMIN_SERVICES}/${data.createCompanyService.id}`);
    },
  });

  const submitFormHandler = async (
    createCompanyServiceInput: CreateCompanyServiceInput
  ) => {
    await create({
      variables: { createCompanyServiceInput },
    });
  };

  return {
    submitFormHandler,
    error: !!error,
    errorMessage: error?.message,
    submitDisabled: loading,
  };
}

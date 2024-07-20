import { useMutation } from "@apollo/client";
import { CREATE_STAFF_SERVICE } from "../graphql";
import { CreateStaffServiceInput } from "../../../../api/__generated__/graphql";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";

export function useCreateStaffService() {
  const navigate = useNavigate();

  const [create, { loading, error }] = useMutation(CREATE_STAFF_SERVICE, {
    onCompleted(data) {
      navigate(`${RoutePaths.STAFF_SERVICES}/${data.createStaffService.id}`);
    },
  });

  const createStaffService = async (
    createStaffServiceInput: CreateStaffServiceInput
  ) => {
    await create({ variables: { createStaffServiceInput } });
  };

  return {
    createStaffService,
    createStaffServiceLoading: loading,
    createStaffServiceError: error,
  };
}

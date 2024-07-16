import { useMutation } from "@apollo/client";
import { CREATE_STAFF } from "../graphql";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";
import {
  CreateStaffMutationVariables,
  UserRole,
} from "../../../../api/__generated__/graphql";

export function useCreateStaff() {
  const navigate = useNavigate();
  const [create, { loading, error }] = useMutation(CREATE_STAFF, {
    onCompleted() {
      navigate(RoutePaths.ADMIN_STAFF);
    },
  });

  const createStaff = async ({
    createUserInput,
    createUserProfileInput,
  }: CreateStaffMutationVariables) => {
    await create({
      variables: {
        createUserInput: { ...createUserInput, role: UserRole.Staff },
        createUserProfileInput,
      },
    });
  };

  return {
    createStaff,
    createStaffLoading: loading,
    createStaffError: error,
  };
}

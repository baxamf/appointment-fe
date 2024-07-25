import { useMutation } from "@apollo/client";
import { CREATE_APPOINTMENT } from "../graphql";
import { CreateAppointmentMutationVariables } from "../../../../api/__generated__/graphql";

export function useCreateAppointment() {
  const [create, { error, loading }] = useMutation(CREATE_APPOINTMENT);

  const onSubmit = async (variables: CreateAppointmentMutationVariables) => {
    await create({
      variables,
    });
  };

  return { onSubmit, loading, errorMessage: error?.message };
}

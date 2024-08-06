import { useMutation } from "@apollo/client";
import { CREATE_APPOINTMENT } from "../graphql";
import { CreateAppointmentMutationVariables } from "../../../../api/__generated__/graphql";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";

export function useCreateAppointment() {
  const [create, { error, loading }] = useMutation(CREATE_APPOINTMENT);
  const navigate = useNavigate();

  const onSubmit = async (variables: CreateAppointmentMutationVariables) => {
    await create({
      variables,
    });

    navigate(RoutePaths.APPOINTMENT_SUCCESS);
  };

  return { onSubmit, loading, errorMessage: error?.message };
}

import { useQuery } from "@apollo/client";
import { GET_STAFF_SERVICES_FOR_APPOINTMENT } from "../graphql";
import { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentProvider";

export function useGetStaffServiceForAppointment() {
  const { serviceId } = useContext(AppointmentContext);

  const { data, loading, error } = useQuery(
    GET_STAFF_SERVICES_FOR_APPOINTMENT,
    {
      variables: { getStaffServicesInput: { serviceId } },
    }
  );

  return {
    staffServices: data?.getStaffServices,
    loading,
    errorMessage: error?.message,
  };
}

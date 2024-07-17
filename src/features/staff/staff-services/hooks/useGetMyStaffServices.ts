import { useQuery } from "@apollo/client";
import { GET_MY_STAFF_SERVICES } from "../graphql";

export function useGetMyStaffServices() {
  const { data, loading, error } = useQuery(GET_MY_STAFF_SERVICES);

  return {
    staffServices: data?.getMyStaffServices,
    staffServicesLoading: loading,
    staffServicesError: error,
  };
}

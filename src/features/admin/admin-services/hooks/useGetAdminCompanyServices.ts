import { useQuery } from "@apollo/client";
import { GET_ADMIN_COMPANY_SERVICES } from "../graphql";

export function useGetAdminCompanyServices() {
  const { data, loading, error } = useQuery(GET_ADMIN_COMPANY_SERVICES);

  return {
    adminServices: data?.getCompanyServices,
    adminServicesLoading: loading,
    adminServicesError: error,
  };
}

import { useQuery } from "@apollo/client";
import { GET_SERVICES_PAGE_COMPANY_SERVICES } from "../graphql";

export function useGetServicesPageCompanyServices() {
  const { data, loading, error } = useQuery(GET_SERVICES_PAGE_COMPANY_SERVICES);

  return {
    services: data?.getCompanyServices,
    loading,
    errorMessage: error?.message,
  };
}

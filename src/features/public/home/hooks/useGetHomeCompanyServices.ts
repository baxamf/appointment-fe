import { useQuery } from "@apollo/client";
import { GET_HOME_COMPANY_SERVICES } from "../graphql";

export function useGetHomeCompanyServices() {
  const { data, loading, error } = useQuery(GET_HOME_COMPANY_SERVICES);

  return {
    services: data?.getCompanyServices,
    loading,
    errorMessage: error?.message,
  };
}

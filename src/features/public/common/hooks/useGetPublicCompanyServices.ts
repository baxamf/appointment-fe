import { useQuery } from "@apollo/client";
import { GET_PUBLIC_COMPANY_SERVICES } from "../graphql";

export function useGetPublicCompanyServices() {
  const { data, loading, error } = useQuery(GET_PUBLIC_COMPANY_SERVICES);

  return {
    companyServices: data?.getCompanyServices,
    errorMessage: error?.message,
    loading,
  };
}

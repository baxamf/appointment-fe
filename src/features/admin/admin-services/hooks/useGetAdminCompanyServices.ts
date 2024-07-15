import { useQuery } from "@apollo/client";
import { GET_ADMIN_COMPANY_SERVICES } from "../graphql";
import { useSearchParams } from "react-router-dom";

export function useGetAdminCompanyServices() {
  const { data, loading, error } = useQuery(GET_ADMIN_COMPANY_SERVICES);
  const [query] = useSearchParams({});

  const res = Object.fromEntries(query);
  console.log(res);

  return {
    adminServices: data?.getCompanyServices,
    adminServicesLoading: loading,
    adminServicesError: error,
  };
}

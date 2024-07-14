import { useQuery } from "@apollo/client";
import { GET_ADMIN_COMPANY_SERVICE } from "../graphql";
import { useParams, useSearchParams } from "react-router-dom";

export function useGetAdminCompanyService() {
  const { companyServiceId } = useParams();
  const [query] = useSearchParams({});

  const res = Object.fromEntries(query);
  console.log(res);

  const { data, loading, error } = useQuery(GET_ADMIN_COMPANY_SERVICE, {
    variables: { companyServiceId: Number(companyServiceId) },
  });

  return {
    adminService: data?.getCompanyService,
    adminServiceLoading: loading,
    adminServiceError: error,
  };
}

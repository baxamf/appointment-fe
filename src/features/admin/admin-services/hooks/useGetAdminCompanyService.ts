import { useQuery } from "@apollo/client";
import { GET_ADMIN_COMPANY_SERVICE } from "../graphql";
import { useParams } from "react-router-dom";

export function useGetAdminCompanyService() {
  const { companyServiceId } = useParams();

  const { data, loading, error } = useQuery(GET_ADMIN_COMPANY_SERVICE, {
    variables: { companyServiceId: Number(companyServiceId) },
  });

  return {
    adminService: data?.getCompanyService,
    adminServiceLoading: loading,
    adminServiceError: error,
  };
}

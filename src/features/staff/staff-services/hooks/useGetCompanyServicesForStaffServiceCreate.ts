import { useQuery } from "@apollo/client";
import { GET_COMPANY_SERVICES_FOR_STAFF_SERVICE_CREATE } from "../graphql";
import { useMemo } from "react";

export function useGetCompanyServicesForStaffServiceCreate() {
  const { data, loading, error } = useQuery(
    GET_COMPANY_SERVICES_FOR_STAFF_SERVICE_CREATE
  );

  const options = useMemo(
    () =>
      data?.getCompanyServices.map(({ id, title }) => ({
        value: id,
        label: title,
      })),
    [data?.getCompanyServices]
  );

  return {
    companyServices: data?.getCompanyServices,
    companyServiceLoading: loading,
    companyServiceError: error,
    options,
  };
}

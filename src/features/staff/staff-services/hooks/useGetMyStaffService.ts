import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_MY_STAFF_SERVICE } from "../graphql";

export function useGetMyStaffService() {
  const { staffServiceId } = useParams();

  const { data, loading, error } = useQuery(GET_MY_STAFF_SERVICE, {
    variables: { staffServiceId: Number(staffServiceId) },
  });

  return {
    staffService: data?.getStaffService,
    staffServiceLoading: loading,
    staffServiceError: error,
  };
}

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ADMIN_STAFF_INFO } from "../graphql";

export function useGetAdminStaffInfo() {
  const { staffId } = useParams();

  const {
    data,
    loading: staffInfoLoading,
    error: StaffInfoError,
  } = useQuery(GET_ADMIN_STAFF_INFO, {
    variables: { staffId: Number(staffId) },
  });

  return {
    staffInfo: data?.getUser,
    staffInfoLoading,
    StaffInfoError,
  };
}

import { useQuery } from "@apollo/client";
import { GET_ADMIN_STAFF } from "../graphql";

export function useGetAdminStaff() {
  const {
    data,
    loading: adminStaffLoading,
    error: adminStaffError,
  } = useQuery(GET_ADMIN_STAFF);

  return {
    adminStaff: data?.getStaff,
    adminStaffLoading,
    adminStaffError,
  };
}

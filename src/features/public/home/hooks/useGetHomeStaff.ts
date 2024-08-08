import { useQuery } from "@apollo/client";
import { GET_HOME_STAFF } from "../graphql";

export function useGetHomeStaff() {
  const { data, loading, error } = useQuery(GET_HOME_STAFF);

  return {
    artists: data?.getStaff,
    loading,
    errorMessage: error?.message,
  };
}

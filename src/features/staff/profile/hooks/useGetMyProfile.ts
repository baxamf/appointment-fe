import { useQuery } from "@apollo/client";
import { GET_MY_PROFILE } from "../graphql";

export function useGetMyProfile() {
  const { data, loading, error } = useQuery(GET_MY_PROFILE);

  return {
    profile: data?.getMyProfile,
    loading,
    errorMessage: error?.message,
  };
}

import { useQuery } from "@apollo/client";
import { GET_ARTISTS_PAGE_ARTISTS } from "../graphql";

export function useGetArtistsPageArtists() {
  const { data, loading, error } = useQuery(GET_ARTISTS_PAGE_ARTISTS);

  return {
    artists: data?.getStaff,
    loading,
    errorMessage: error?.message,
  };
}

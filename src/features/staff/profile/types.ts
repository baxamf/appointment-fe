import { GetMyProfileQuery } from "../../../api/__generated__/graphql";

export type MyProfile = Omit<GetMyProfileQuery["getMyProfile"], "__typename">;

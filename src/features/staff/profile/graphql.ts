import { gql } from "../../../api/__generated__";

export const GET_MY_PROFILE = gql(`
    query GetMyProfile {
        getMyProfile {
            firstName
            lastName
            nickName
            phone
            avatar
            bio
        }
    }
`);

export const UPDATE_MY_PROFILE = gql(`
    mutation UpdateMyProfile($updateUserProfileInput: UpdateUserProfileInput!) {
        updateMyProfile(updateUserProfileInput: $updateUserProfileInput) {
            firstName
            lastName
            nickName
            phone
            avatar
            bio
        }
    }    
`);

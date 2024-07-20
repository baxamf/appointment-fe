import { gql } from "../../../api/__generated__";

export const GET_ADMIN_STAFF = gql(`
    query GetAdminStaff {
        getStaff {
            id
            profile {
                firstName
                lastName
                nickName
                specialization
                phone
                avatar
            }
            socials {
                id
                title
                link
            }
        }
    }
`);

export const GET_ADMIN_STAFF_INFO = gql(`
    query GetAdminStaffInfo($staffId: Int!) {
        getUser(userId: $staffId) {
            email
            createdAt
            profile {
                firstName
                lastName
                nickName
                specialization
                phone
                avatar
                bio
            }
            socials {
                id
                title
                link
            }
        }
    } 
`);

export const CREATE_STAFF = gql(`
    mutation CreateStaff(
        $createUserInput: CreateUserInput!
        $createUserProfileInput: CreateUserProfileInput!
    ) {
        createUser(
            createUserInput: $createUserInput
            createUserProfileInput: $createUserProfileInput
        ) {
            id
        }
    }    
`);

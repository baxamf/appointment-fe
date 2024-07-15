import { gql } from "../../../api/__generated__";

export const GET_ADMIN_STAFF = gql(`
    query GetAdminStaff {
        getStaff {
            id
            profile {
                firstName
                lastName
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

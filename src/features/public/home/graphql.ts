import { gql } from "../../../api/__generated__";

export const GET_HOME_COMPANY_SERVICES = gql(`
    query GetHomeCompanyServices {
        getCompanyServices {
            id
            title
            description
            image
            tags {
                title
            }
        }
    }
`);

export const GET_HOME_STAFF = gql(`
    query GetHomeStaff {
        getStaff {
            id
            profile {
                firstName
                lastName
                nickName
                avatar
                bio
            }
        }
    }    
`);

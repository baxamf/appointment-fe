import { gql } from "../../../api/__generated__";

export const GET_SERVICES_PAGE_COMPANY_SERVICES = gql(`
    query GetServicesPageCompanyServices {
        getCompanyServices {
            id
            title
            description
            image
            staffServices {
                id
                userId
                user {
                    profile {
                        firstName
                        lastName
                        nickName
                        avatar
                    }
                }
            }
            tags {
                id
                title
            }
        }
    }    
`);

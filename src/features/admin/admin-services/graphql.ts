import { gql } from "../../../api/__generated__";

export const GET_ADMIN_COMPANY_SERVICES = gql(`
    query GetAdminCompanyServices {
        getCompanyServices {
            id
            title
            description
            image
            order
            tags {
                id
                title
            }
        }
    }
`);

import { gql } from "../../../api/__generated__";

export const GET_PUBLIC_COMPANY_SERVICES = gql(`
    query GetPublicCompanyServices {
        getCompanyServices {
            id
            title
            description
            image
            order
            tags {
                title
            }
        }
    }
`);

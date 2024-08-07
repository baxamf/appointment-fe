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

import { gql } from "../../api/__generated__";

export const GET_ME = gql(`
    query GetMe {
        getMe {
            id
            email
            role
            createdAt
        }
    }
`);

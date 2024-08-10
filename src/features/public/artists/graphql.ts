import { gql } from "../../../api/__generated__";

export const GET_ARTISTS_PAGE_ARTISTS = gql(`
    query GetArtistsPageArtists {
        getStaff {
            id
            profile {
                firstName
                lastName
                nickName
                avatar
                bio
            }
            services {
                id
                title
                description
                image
                price
                duration
            }
        }
    }
`);

import { gql } from "../../../api/__generated__";

export const GET_MY_STAFF_SERVICES = gql(`
    query GetMyStaffServices {
        getMyStaffServices {
            id
            title
            description
            image
            price
            duration
            service {
                title
            }
        }
    }
`);

export const GET_MY_STAFF_SERVICE = gql(`
    query GetMyStaffService($staffServiceId: Int!) {
        getStaffService(staffServiceId: $staffServiceId) {
            id
            title
            description
            image
            price
            duration
            service {
                title
                description
                image
            }
        }
    }
`);

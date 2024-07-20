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
            serviceId
            title
            description
            image
            price
            duration
        }
    }
`);

export const UPDATE_MY_STAFF_SERVICE = gql(`
    mutation UpdateMyStaffService(
        $staffServiceId: Int!
        $updateStaffServiceInput: UpdateStaffServiceInput!
    ) {
        updateStaffService(
            staffServiceId: $staffServiceId
            updateStaffServiceInput: $updateStaffServiceInput
        ) {
            serviceId
            title
            description
            image
            price
            duration
        }
    }
`);

export const GET_COMPANY_SERVICES_FOR_STAFF_SERVICE_CREATE = gql(`
    query GetCompanyServicesForStaffServiceCreate {
        getCompanyServices {
            id
            title
            description
            image
        }
    }
`);

export const CREATE_STAFF_SERVICE = gql(`
    mutation CreateStaffService(
        $createStaffServiceInput: CreateStaffServiceInput!
    ) {
        createStaffService(createStaffServiceInput: $createStaffServiceInput) {
            id
        }
    }    
`);

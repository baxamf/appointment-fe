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

export const GET_ADMIN_COMPANY_SERVICE = gql(`
    query GetAdminCompanyService($companyServiceId: Int!) {
        getCompanyService(companyServiceId: $companyServiceId) {
            id
            title
            description
            image
            order
        }
    }    
`);

export const UPDATE_COMPANY_SERVICE = gql(`
    mutation UpdateCompanyService(
        $companyServiceId: Int!
        $updateCompanyServiceInput: UpdateCompanyServiceInput!
    ) {
        updateCompanyService(
            updateCompanyServiceInput: $updateCompanyServiceInput
            companyServiceId: $companyServiceId
        ) {
            id
            title
            description
            image
            order
        }
    }   
`);

export const GET_COMPANY_SERVICE_TAGS = gql(`
    query GetCompanyServiceTags($companyServiceId: Int!) {
        getCompanyServiceTags(companyServiceId: $companyServiceId) {
            id
            title
        }
    }    
`);

export const CREATE_COMPANY_SERVICE_TAG = gql(`
    mutation CreateServiceTag(
        $createServiceTagInput: CreateServiceTagInput!
        $companyServiceId: Int
    ) {
        createServiceTag(
            createServiceTagInput: $createServiceTagInput
            companyServiceId: $companyServiceId
        ) {
            id
        }
    }   
`);

export const UPDATE_COMPANY_SERVICE_TAG = gql(`
    mutation UpdateServiceTag(
        $serviceTagId: Int!
        $updateServiceTagInput: UpdateServiceTagInput!
    ) {
        updateServiceTag(
            serviceTagId: $serviceTagId
            updateServiceTagInput: $updateServiceTagInput
        ) {
            id
        }
    }
`);

export const REMOVE_COMPANY_SERVICE_TAG = gql(`
    mutation RemoveServiceTag($serviceTagId: Int!) {
        removeServiceTag(serviceTagId: $serviceTagId) {
            id
        }
    }    
`);

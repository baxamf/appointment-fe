import { gql } from "../../../api/__generated__";

export const CREATE_APPOINTMENT = gql(`
    mutation CreateAppointment(
        $createAppointmentInput: CreateAppointmentInput!
        $customerDataInput: CustomerDataInput!
    ) {
        createAppointment(
            createAppointmentInput: $createAppointmentInput
            customerDataInput: $customerDataInput
        ) {
            id
            targetTime
        }
    }    
`);

export const GET_STAFF_FOR_APPOINTMENT = gql(`
    query GetStaffForAppointment($getStaffInput: GetStaffInput) {
        getStaff(getStaffInput: $getStaffInput) {
            id
            profile {
                firstName
                lastName
                nickName
                specialization
                phone
                avatar
                bio
            }
        }
    }    
`);

export const GET_STAFF_SERVICES_FOR_APPOINTMENT = gql(`
    query GetStaffServicesForAppointment(
        $getStaffServicesInput: GetStaffServicesInput
    ) {
        getStaffServices(getStaffServicesInput: $getStaffServicesInput) {
            id
            title
            description
            image
            price
            duration
            user {
                id
                profile {
                    firstName
                    lastName
                    nickName
                    phone
                    avatar
                }
                workingDays {
                    id
                    day
                    startHour
                    startMinute
                    endHour
                    endMinute
                }
            }
        }
    }    
`);

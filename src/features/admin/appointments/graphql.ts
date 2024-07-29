import { gql } from "../../../api/__generated__";

export const GET_ALL_APPOINTMENTS = gql(`
    query GetAllAppointments(
        $getAppointmentFilterInput: GetAppointmentFilterInput
    ) {
        getAllAppointments(getAppointmentFilterInput: $getAppointmentFilterInput) {
            id
            status
            targetTime
            customer {
                profile {
                    firstName
                    lastName
                    phone
                }
            }
            staff {
                profile {
                    firstName
                    lastName
                    specialization
                    phone
                    avatar
                }
            }
            staffService {
                service {
                    title
                }
            }
        }
    }    
`);

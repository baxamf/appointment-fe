import { gql } from "../../../api/__generated__";

export const GET_MY_STAFF_APPOINTMENTS = gql(`
    query GetMyStaffAppointments(
        $getAppointmentFilterInput: GetAppointmentFilterInput
    ) {
        getMyAppointments(getAppointmentFilterInput: $getAppointmentFilterInput) {
            id
            status
            targetTime
            description
            images
            staffService {
                title
            }
            customer {
                profile {
                    firstName
                    lastName
                    phone
                }
            }
        }
    } 
`);

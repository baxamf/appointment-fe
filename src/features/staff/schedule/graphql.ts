import { gql } from "../../../api/__generated__";

export const GET_MY_SCHEDULE = gql(`
    query GetMySchedule {
        getMySchedule {
            id
            day
            startHour
            startMinute
            endHour
            endMinute
        }
    }    
`);

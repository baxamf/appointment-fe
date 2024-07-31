import { gql } from "../../../api/__generated__";

export const GET_ADMIN_STAFF = gql(`
    query GetAdminStaff {
        getStaff {
            id
            profile {
                firstName
                lastName
                nickName
                specialization
                phone
                avatar
            }
            socials {
                id
                title
                link
            }
        }
    }
`);

export const GET_ADMIN_STAFF_INFO = gql(`
    query GetAdminStaffInfo($staffId: Int!) {
        getUser(userId: $staffId) {
            email
            createdAt
            profile {
                firstName
                lastName
                nickName
                specialization
                phone
                avatar
                bio
            }
            socials {
                id
                title
                link
            }
        }
    } 
`);

export const CREATE_STAFF = gql(`
    mutation CreateStaff(
        $createUserInput: CreateUserInput!
        $createUserProfileInput: CreateUserProfileInput!
    ) {
        createUser(
            createUserInput: $createUserInput
            createUserProfileInput: $createUserProfileInput
        ) {
            id
        }
    }    
`);

export const GET_STAFF_WORKING_DAYS = gql(`
    query GetStaffWorkingDays($userId: Int!) {
        getUserWorkingDays(userId: $userId) {
            id
            day
            startHour
            startMinute
            endHour
            endMinute
        }
    }
`);

export const CREATE_STAFF_WORKING_DAY = gql(`
    mutation CreateStaffWorkingDay(
        $createUserWorkingDayInput: CreateUserWorkingDayInput!
    ) {
        createUserWorkingDay(createUserWorkingDayInput: $createUserWorkingDayInput) {
            id
        }
    }
`);

export const UPDATE_STAFF_WORKING_DAY = gql(`
    mutation UpdateStaffWorkingDay(
        $userWorkingDayId: Int!
        $updateUserWorkingDayInput: UpdateUserWorkingDayInput!
    ) {
        updateUserWorkingDay(
            userWorkingDayId: $userWorkingDayId
            updateUserWorkingDayInput: $updateUserWorkingDayInput
        ) {
            id
        }
    }    
`);

export const REMOVE_STAFF_WORKING_DAY = gql(`
    mutation RemoveStaffWorkingDay($userWorkingDayId: Int!) {
        removeUserWorkingDay(userWorkingDayId: $userWorkingDayId) {
            id
        }
    }    
`);

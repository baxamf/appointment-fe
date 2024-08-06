import {
  GetAppointmentAvailableTimesQuery,
  GetPublicCompanyServicesQuery,
  GetStaffServicesForAppointmentQuery,
} from "../../../api/__generated__/graphql";

export type MainServicesForAppointment =
  GetPublicCompanyServicesQuery["getCompanyServices"][0];

export type StaffServicesForAppointment =
  GetStaffServicesForAppointmentQuery["getStaffServices"][0];

export type StaffWorkingDaysForAppointment =
  GetStaffServicesForAppointmentQuery["getStaffServices"][0]["user"]["workingDays"];

export type AppointmentAvailableTargetTimes =
  GetAppointmentAvailableTimesQuery["getAppointmentAvailableTimes"];

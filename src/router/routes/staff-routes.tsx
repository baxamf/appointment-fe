import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import RouteGuard from "../RouteGuard";
import StaffLayout from "../../layouts/StaffLayout";
import { UserRole } from "../../api/__generated__/graphql";
import { RoutePaths } from "../enums";
import StaffProvider from "../../store/StaffProvider";

const StaffServices = lazy(
  () => import("../../features/staff/staff-services/StaffServices")
);
const StaffAppointmentsPage = lazy(
  () => import("../../features/staff/appointments/pages/StaffAppointmentsPage")
);
const StaffProfile = lazy(
  () => import("../../features/staff/profile/pages/StaffProfile")
);
const StaffSchedulePage = lazy(
  () => import("../../features/staff/schedule/pages/StaffSchedulePage")
);

export default function StaffRoutes(): RouteObject[] {
  return [
    {
      element: (
        <RouteGuard role={UserRole.Staff}>
          <StaffProvider>
            <StaffLayout />
          </StaffProvider>
        </RouteGuard>
      ),
      path: "staff/*",
      children: [
        {
          index: true,
          element: <Navigate to={RoutePaths.STAFF_SCHEDULE} />,
        },
        {
          path: "appointments/*",
          element: <StaffAppointmentsPage />,
        },
        {
          path: "schedule",
          element: <StaffSchedulePage />,
        },
        {
          path: "services/*",
          element: <StaffServices />,
        },
        {
          path: "profile",
          element: <StaffProfile />,
        },
      ],
    },
  ];
}

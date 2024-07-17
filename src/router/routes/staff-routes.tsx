import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import RouteGuard from "../RouteGuard";
import StaffLayout from "../../layouts/StaffLayout";
import { UserRole } from "../../api/__generated__/graphql";
import { RoutePaths } from "../enums";

const StaffServices = lazy(
  () => import("../../features/staff/staff-services/StaffServices")
);
const StaffSchedulePage = lazy(
  () => import("../../features/staff/schedule/pages/StaffSchedulePage")
);

export default function StaffRoutes(): RouteObject[] {
  return [
    {
      element: (
        <RouteGuard role={UserRole.Staff}>
          <StaffLayout />
        </RouteGuard>
      ),
      path: "staff/*",
      children: [
        {
          index: true,
          element: <Navigate to={RoutePaths.STAFF_SERVICES} />,
        },
        {
          path: "services/*",
          element: <StaffServices />,
        },
        {
          path: "schedule/*",
          element: <StaffSchedulePage />,
        },
      ],
    },
  ];
}

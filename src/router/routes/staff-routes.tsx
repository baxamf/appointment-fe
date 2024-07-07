import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import RouteGuard from "../RouteGuard";
import StaffLayout from "../../layouts/StaffLayout";
import { UserRole } from "../../api/__generated__/graphql";

const StaffServices = lazy(
  () => import("../../features/staff/staff-services/StaffServices")
);
const Schedule = lazy(() => import("../../features/staff/schedule/Schedule"));

export default function StaffRoutes(): RouteObject[] {
  return [
    {
      element: (
        <RouteGuard role={UserRole.Staff}>
          <StaffLayout />
        </RouteGuard>
      ),
      path: "staff/",
      children: [
        {
          index: true,
          element: <Schedule />,
        },
        {
          path: "service/*",
          element: <StaffServices />,
        },
      ],
    },
  ];
}

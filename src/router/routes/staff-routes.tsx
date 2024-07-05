import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import RouteGuard from "../RouteGuard";
import { UserRole } from "../../common/types";
import StaffLayout from "../../layouts/StaffLayout";

const StaffServices = lazy(
  () => import("../../features/staff/staff-services/StaffServices")
);
const Schedule = lazy(() => import("../../features/staff/schedule/Schedule"));

export default function StaffRoutes(): RouteObject[] {
  return [
    {
      element: (
        <RouteGuard role={UserRole.STAFF}>
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

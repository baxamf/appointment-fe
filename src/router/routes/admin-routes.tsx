import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import RouteGuard from "../RouteGuard";
import AdminLayout from "../../layouts/AdminLayout";
import { UserRole } from "../../api/__generated__/graphql";
import { RoutePaths } from "../enums";

const AdminAppointmentsPage = lazy(
  () => import("../../features/admin/appointments/pages/AdminAppointmentsPage")
);

const AdminServices = lazy(
  () => import("../../features/admin/admin-services/AdminServices")
);
const AdminStaff = lazy(
  () => import("../../features/admin/admin-staff/AdminStaff")
);

export default function AdminRoutes(): RouteObject[] {
  return [
    {
      element: (
        <RouteGuard role={UserRole.Admin}>
          <AdminLayout />
        </RouteGuard>
      ),
      path: "admin/*",
      children: [
        {
          index: true,
          element: <Navigate to={RoutePaths.ADMIN_APPOINTMENTS} />,
        },
        {
          path: "appointments/*",
          element: <AdminAppointmentsPage />,
        },
        {
          path: "services/*",
          element: <AdminServices />,
        },
        {
          path: "staff/*",
          element: <AdminStaff />,
        },
      ],
    },
  ];
}

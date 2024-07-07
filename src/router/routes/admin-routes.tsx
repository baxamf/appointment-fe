import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import RouteGuard from "../RouteGuard";
import AdminLayout from "../../layouts/AdminLayout";
import { UserRole } from "../../api/__generated__/graphql";

const AdminServices = lazy(
  () => import("../../features/admin/admin-services/AdminServices")
);
const AdminStaffs = lazy(
  () => import("../../features/admin/admin-staffs/AdminStaffs")
);

export default function AdminRoutes(): RouteObject[] {
  return [
    {
      element: (
        <RouteGuard role={UserRole.Admin}>
          <AdminLayout />
        </RouteGuard>
      ),
      path: "admin/",
      children: [
        {
          path: "services/*",
          element: <AdminServices />,
        },
        {
          path: "staff/*",
          element: <AdminStaffs />,
        },
      ],
    },
  ];
}

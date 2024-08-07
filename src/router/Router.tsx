import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import AdminRoutes from "./routes/admin-routes";
import PublicRoutes from "./routes/public-routes";
import StaffRoutes from "./routes/staff-routes";
import PageTransition from "../common/components/transitions/PageTransition";

const Login = lazy(() => import("../features/auth/pages/Login"));
const ErrorPage = lazy(() => import("../common/pages/Error"));

export default function Router() {
  return createBrowserRouter([
    ...PublicRoutes(),
    ...AdminRoutes(),
    ...StaffRoutes(),
    {
      path: "login",
      element: (
        <Suspense fallback={<PageTransition />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/*",
      element: (
        <Suspense fallback={<PageTransition />}>
          <ErrorPage message="Something goes wrong" />
        </Suspense>
      ),
    },
  ]);
}

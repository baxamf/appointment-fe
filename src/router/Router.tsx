import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import AdminRoutes from "./routes/admin-routes";
import PublicRoutes from "./routes/public-routes";
import StaffRoutes from "./routes/staff-routes";

const Login = lazy(() => import("../pages/Login"));
const ErrorPage = lazy(() => import("../pages/Error"));

export default function Router() {
  return createBrowserRouter([
    ...PublicRoutes(),
    ...AdminRoutes(),
    ...StaffRoutes(),
    {
      path: "login",
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <ErrorPage />
        </Suspense>
      ),
    },
  ]);
}

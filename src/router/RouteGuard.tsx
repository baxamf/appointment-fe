import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../store/hooks/useUser";
import { UserRole } from "../api/__generated__/graphql";

interface IRouteGuard {
  children: JSX.Element;
  role: UserRole;
}

export default function RouteGuard({ children, role }: IRouteGuard) {
  const location = useLocation();
  const user = useUser();

  if (role !== user?.role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

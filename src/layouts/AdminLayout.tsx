import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "../store/hooks/useUser";

export default function AdminLayout() {
  const user = useUser();
  return (
    <>
      <div>Admin Layout {user?.role}</div>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

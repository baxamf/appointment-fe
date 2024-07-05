import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <div>Admin Layout</div>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

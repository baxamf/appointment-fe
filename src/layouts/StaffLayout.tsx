import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function StaffLayout() {
  return (
    <>
      <div>Staff Layout</div>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

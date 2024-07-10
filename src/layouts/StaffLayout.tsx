import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../common/components/loading/Loading";

export default function StaffLayout() {
  return (
    <>
      <div>Staff Layout</div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}

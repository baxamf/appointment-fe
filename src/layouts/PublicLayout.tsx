import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <div>Header</div>
      <main>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <div>Footer</div>
    </>
  );
}

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import AdminHeader from "../common/components/headers/AdminHeader";
import StaffNav from "../common/components/nav/StaffNav";
import PageTransition from "../common/components/transitions/PageTransition";

export default function StaffLayout() {
  return (
    <Layout className="w-screen min-h-screen px-[10vw] gap-[2vw] flex-wrap place-items-start content-start">
      <AdminHeader />

      <Layout.Sider className="sticky top-[calc(10vh+2vw)]">
        <StaffNav />
      </Layout.Sider>

      <Layout.Content className="ml-[2vw] pb-[4vw]">
        <Suspense fallback={<PageTransition />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
    </Layout>
  );
}

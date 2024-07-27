import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../common/components/loading/Loading";
import { Layout } from "antd";
import AdminHeader from "../common/components/headers/AdminHeader";
import StaffNav from "../common/components/nav/StaffNav";

export default function StaffLayout() {
  return (
    <Layout className="w-screen min-h-screen px-[10vw] flex-wrap place-items-start content-start">
      <AdminHeader />

      <Layout.Sider style={{ position: "sticky", top: "10vh" }}>
        <StaffNav />
      </Layout.Sider>

      <Layout.Content className="ml-[4vw]">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
    </Layout>
  );
}

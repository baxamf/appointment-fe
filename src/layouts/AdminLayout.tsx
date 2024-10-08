import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import AdminHeader from "../common/components/headers/AdminHeader";
import AdminNav from "../common/components/nav/AdminNav";
import PageTransition from "../common/components/transitions/PageTransition";

export default function AdminLayout() {
  return (
    <Layout className="w-screen min-h-screen px-[10vw] gap-[2vw] flex-wrap place-items-start content-start">
      <AdminHeader />

      <Layout.Sider className="sticky top-[calc(10vh+2vw)]">
        <AdminNav />
      </Layout.Sider>

      <Layout.Content className="ml-[2vw] pb-[4vw]">
        <Suspense fallback={<PageTransition />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
    </Layout>
  );
}

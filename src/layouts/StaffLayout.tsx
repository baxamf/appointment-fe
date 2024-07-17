import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../common/components/loading/Loading";
import { Layout } from "antd";
import AdminHeader from "../common/components/headers/AdminHeader";
import StaffNav from "../common/components/nav/StaffNav";

export default function StaffLayout() {
  return (
    <Layout
      className="container"
      style={{
        flexWrap: "wrap",
        placeItems: "flex-start",
        alignContent: "flex-start",
        gap: "2vw",
      }}
    >
      <AdminHeader />

      <Layout.Sider style={{ position: "sticky", top: "calc(10vh + 2vw)" }}>
        <StaffNav />
      </Layout.Sider>

      <Layout.Content style={{ marginLeft: "2vw" }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
    </Layout>
  );
}

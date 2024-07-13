import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Loading from "../common/components/loading/Loading";
import AdminHeader from "../common/components/headers/AdminHeader";
import AdminNav from "../common/components/nav/AdminNav";

export default function AdminLayout() {
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

      <Layout.Sider style={{ position: "sticky", top: "calc(2vw + 84px)" }}>
        <AdminNav />
      </Layout.Sider>

      <Layout.Content style={{ marginLeft: "2vw" }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
    </Layout>
  );
}

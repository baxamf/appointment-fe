import { Layout } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "../common/components/headers/PublicHeader";
import PublicFooter from "../common/components/footers/PublicFooter";
import Loading from "../common/components/loading/Loading";

export default function PublicLayout() {
  return (
    <Layout className="container">
      <PublicHeader />
      <Layout.Content style={{ display: "flex", placeItems: "center" }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
      <PublicFooter />
    </Layout>
  );
}

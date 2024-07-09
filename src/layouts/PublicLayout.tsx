import { Layout } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "../common/components/headers/PublicHeader";
import PublicFooter from "../common/components/footers/PublicFooter";

export default function PublicLayout() {
  return (
    <Layout className="container">
      <PublicHeader />
      <Layout.Content>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </Layout.Content>
      <PublicFooter />
    </Layout>
  );
}

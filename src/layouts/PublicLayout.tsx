import { Layout } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "../common/components/headers/PublicHeader";
import PublicFooter from "../common/components/footers/PublicFooter";
import Loading from "../common/components/loading/Loading";
import blobBg from "../assets/svg/blobBg.svg";

export default function PublicLayout() {
  return (
    <Layout
      className="container"
      style={{
        backgroundImage: `url(${blobBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <PublicHeader />

      <Layout.Content style={{ display: "flex" }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout.Content>

      <PublicFooter />
    </Layout>
  );
}

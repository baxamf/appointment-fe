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
      className="w-screen min-h-screen px-[10vw] text-center bg-cover"
      style={{
        backgroundImage: `url(${blobBg})`,
      }}
    >
      <PublicHeader />

      <Layout.Content className="grid">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout.Content>

      <PublicFooter />
    </Layout>
  );
}

import { Layout } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "../common/components/headers/PublicHeader";
import PublicFooter from "../common/components/footers/PublicFooter";
import blobBg from "../assets/svg/blobBg.svg";
import PageTransition from "../common/components/transitions/PageTransition";

export default function PublicLayout() {
  return (
    <Layout
      className="w-screen min-h-screen px-[10vw] text-center bg-no-repeat"
      style={{
        backgroundImage: `url(${blobBg})`,
      }}
    >
      <PublicHeader />

      <Layout.Content className="grid">
        <Suspense fallback={<PageTransition />}>
          <Outlet />
        </Suspense>
      </Layout.Content>

      <PublicFooter />
    </Layout>
  );
}

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "../store/hooks/useUser";
import { Layout, Typography } from "antd";
import Loading from "../common/components/loading/Loading";

export default function AdminLayout() {
  const user = useUser();
  return (
    <Layout className="container">
      <Typography.Title level={1}>Admin Layout {user?.role}</Typography.Title>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}

import { Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  return (
    <Layout
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Layout>
  );
}

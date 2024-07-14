import { Flex, Layout, Typography } from "antd";
import LoginForm from "../components/LoginForm";
import blobBg from "../../../assets/svg/blobBg.svg";

export default function Login() {
  return (
    <Layout
      className="container"
      style={{
        justifyContent: "center",
        backgroundImage: `url(${blobBg})`,
        backgroundSize: "cover",
      }}
    >
      <Flex vertical style={{ width: 300, backdropFilter: "blur(5px)" }}>
        <Typography.Title level={2}>Sign in</Typography.Title>

        <LoginForm />
      </Flex>
    </Layout>
  );
}

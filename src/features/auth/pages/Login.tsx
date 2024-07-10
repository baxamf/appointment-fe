import { Flex, Layout, Typography } from "antd";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <Layout className="container" style={{ justifyContent: "center" }}>
      <Flex vertical style={{ width: 300 }}>
        <Typography.Title level={2}>Sign in</Typography.Title>

        <LoginForm />
      </Flex>
    </Layout>
  );
}

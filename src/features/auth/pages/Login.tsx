import { Flex, Layout, Typography } from "antd";
import LoginForm from "../components/LoginForm";
import blobBg from "../../../assets/svg/blobBg.svg";
import PageTransition from "../../../common/components/transitions/PageTransition";

export default function Login() {
  return (
    <>
      <PageTransition />
      <Layout
        className="w-screen min-h-screen grid place-content-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${blobBg})`,
        }}
      >
        <Flex className="grid text-center gap-4 w-80">
          <Typography.Title level={2}>Sign in</Typography.Title>

          <LoginForm />
        </Flex>
      </Layout>
    </>
  );
}

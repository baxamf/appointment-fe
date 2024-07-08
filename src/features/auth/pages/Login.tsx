import { Typography } from "antd";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <Typography.Title level={1}>Sign up</Typography.Title>

      <LoginForm />
    </>
  );
}

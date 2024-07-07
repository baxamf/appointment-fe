import { Link } from "react-router-dom";
import { Button, Form, Input, FormProps } from "antd";
import { useLoginUser } from "../hooks/useLoginUser";
import { LoginInput } from "../../../api/__generated__/graphql";

export default function Login() {
  const { loginUser, loginError, loginLoading } = useLoginUser();

  const onFinish: FormProps<LoginInput>["onFinish"] = async (values) => {
    loginUser(values);
  };

  const onFinishFailed: FormProps<LoginInput>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <h1>Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<LoginInput>
          label="Username"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<LoginInput>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        {loginError && <div>{loginError.message}</div>}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={loginLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Link
        style={{ border: "1px solid white", padding: "10px 20px" }}
        to="/admin"
      >
        Admin
      </Link>
      <Link
        style={{ border: "1px solid white", padding: "10px 20px" }}
        to="/staff"
      >
        Staff
      </Link>
    </>
  );
}

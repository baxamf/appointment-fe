import { FormikProvider, useFormik } from "formik";
import { LoginInput } from "../../../api/__generated__/graphql";
import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../hooks/useLoginUser";
import { loginValidationSchema } from "../utils/formik/login-validation-schema";
import FormErrorMessage from "../../../common/components/errors/FormErrorMessage";

export default function LoginForm() {
  const { loginUser, loginError, loginLoading } = useLoginUser();

  const formik = useFormik<LoginInput>({
    initialValues: { email: "test@mail.com", password: "password" },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => loginUser(values),
  });

  const isError = !!Object.keys(formik.errors).length;

  const navigate = useNavigate();

  return (
    <FormikProvider value={formik}>
      <Form
        name="basic"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
        initialValues={formik.initialValues}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<LoginInput>
          label="email"
          validateStatus={formik.errors.email && "error"}
        >
          <Input
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="email" />
        </Form.Item>

        <Form.Item<LoginInput>
          label="password"
          validateStatus={formik.errors.password && "error"}
        >
          <Input.Password
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="password" />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ width: "100%", paddingBlock: "24px" }}
            size="large"
            type="primary"
            htmlType="submit"
            disabled={loginLoading || isError}
          >
            Submit
          </Button>
        </Form.Item>

        {loginError && (
          <Typography.Title level={4}>{loginError.message}</Typography.Title>
        )}

        <Button
          style={{ paddingBlock: 24 }}
          size="large"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </Form>
    </FormikProvider>
  );
}

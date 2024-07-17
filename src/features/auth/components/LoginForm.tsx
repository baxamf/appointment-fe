import { FormikProvider, useFormik } from "formik";
import { LoginInput } from "../../../api/__generated__/graphql";
import { Alert, Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../hooks/useLoginUser";
import { loginValidationSchema } from "../utils/formik/login-validation-schema";
import FormErrorMessage from "../../../common/components/errors/FormErrorMessage";

export default function LoginForm() {
  const { loginUser, loginError, loginLoading } = useLoginUser();

  const formik = useFormik<LoginInput>({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidationSchema,
    onSubmit: loginUser,
  });

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
            disabled={!formik.isValid || loginLoading}
          >
            Submit
          </Button>
        </Form.Item>

        {loginError && <Alert message={loginError.message} type="error" />}

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

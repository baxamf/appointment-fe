import { FormikProvider, useFormik } from "formik";
import { Form, Alert, Button, Input } from "antd";
import { useCreateStaff } from "../hooks/useCreateStaff";
import { CreateStaffMutationVariables } from "../../../../api/__generated__/graphql";
import FormErrorMessage from "../../../../common/components/errors/FormErrorMessage";
import { createStaffValidationSchema } from "../utils/formik/create-staff-validation-schema";

export default function AdminStaffCreateForm() {
  const { createStaff, createStaffError, createStaffLoading } =
    useCreateStaff();

  const formik = useFormik<CreateStaffMutationVariables>({
    validationSchema: createStaffValidationSchema,
    initialValues: {
      createUserInput: { email: "", password: "" },
      createUserProfileInput: { firstName: "", phone: "", specialization: "" },
    },
    onSubmit: createStaff,
  });

  return (
    <FormikProvider value={formik}>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          minWidth: "20vw",
        }}
        initialValues={formik.initialValues}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<CreateStaffMutationVariables>
          label="email"
          validateStatus={formik.errors.createUserInput?.email && "error"}
        >
          <Input
            required
            name="createUserInput.email"
            value={formik.values.createUserInput.email || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="createUserInput.email" />
        </Form.Item>

        <Form.Item<CreateStaffMutationVariables>
          label="name"
          validateStatus={
            formik.errors.createUserProfileInput?.firstName && "error"
          }
        >
          <Input
            name="createUserProfileInput.firstName"
            value={formik.values.createUserProfileInput.firstName || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="createUserProfileInput.firstName" />
        </Form.Item>

        <Form.Item<CreateStaffMutationVariables>
          label="phone"
          validateStatus={
            formik.errors.createUserProfileInput?.phone && "error"
          }
        >
          <Input.TextArea
            name="createUserProfileInput.phone"
            spellCheck="false"
            autoSize={true}
            value={formik.values.createUserProfileInput.phone || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <FormErrorMessage name="createUserProfileInput.phone" />
        </Form.Item>

        <Form.Item<CreateStaffMutationVariables>
          label="specialization"
          validateStatus={
            formik.errors.createUserProfileInput?.specialization && "error"
          }
        >
          <Input.TextArea
            name="createUserProfileInput.specialization"
            spellCheck="false"
            autoSize={true}
            value={formik.values.createUserProfileInput.specialization || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <FormErrorMessage name="createUserProfileInput.specialization" />
        </Form.Item>

        <Form.Item<CreateStaffMutationVariables>
          label="password"
          validateStatus={formik.errors.createUserInput?.password && "error"}
        >
          <Input.Password
            name="createUserInput.password"
            value={formik.values.createUserInput.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="createUserInput.password" />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ paddingBlock: "24px", marginTop: "4vh" }}
            size="large"
            type="primary"
            htmlType="submit"
            disabled={createStaffLoading || !formik.isValid || !formik.dirty}
          >
            Add new staff
          </Button>
        </Form.Item>

        {createStaffError && (
          <Alert message={createStaffError.message} type="error" />
        )}
      </Form>
    </FormikProvider>
  );
}

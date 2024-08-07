import { Button, Form, Input } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { CreateAppointmentMutationVariables } from "../../../../api/__generated__/graphql";
import FormErrorMessage from "../../../../common/components/errors/FormErrorMessage";
import { useAppointmentFormControls } from "../hooks/useAppointmentFormControls";
import PageTransition from "../../../../common/components/transitions/PageTransition";

export default function AppointmentFormSetDetailInfo() {
  const { formik, resetTargetTime } = useAppointmentFormControls();

  return (
    <>
      <PageTransition />

      <Form
        className="grid gap-5 min-w-[400px]"
        initialValues={formik.initialValues}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<CreateAppointmentMutationVariables>
          label="email"
          validateStatus={formik.errors.customerDataInput?.email && "error"}
        >
          <Input
            name="customerDataInput.email"
            id="customerDataInput.email"
            value={formik.values.customerDataInput.email || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="customerDataInput.email" />
        </Form.Item>

        <Form.Item<CreateAppointmentMutationVariables>
          label="name"
          validateStatus={formik.errors.customerDataInput?.firstName && "error"}
        >
          <Input
            name="customerDataInput.firstName"
            value={formik.values.customerDataInput.firstName || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="customerDataInput.firstName" />
        </Form.Item>

        <Form.Item<CreateAppointmentMutationVariables>
          label="phone"
          validateStatus={formik.errors.customerDataInput?.phone && "error"}
        >
          <Input
            name="customerDataInput.phone"
            spellCheck="false"
            value={formik.values.customerDataInput.phone || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <FormErrorMessage name="customerDataInput.phone" />
        </Form.Item>

        <Form.Item<CreateAppointmentMutationVariables>
          label="description"
          validateStatus={
            formik.errors.createAppointmentInput?.description && "error"
          }
        >
          <Input.TextArea
            className="leading-5"
            name="createAppointmentInput.description"
            spellCheck="false"
            autoSize={true}
            value={formik.values.createAppointmentInput.description || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <FormErrorMessage name="createAppointmentInput.description" />
        </Form.Item>

        <Button
          type="text"
          icon={<CaretLeftOutlined />}
          iconPosition="start"
          className="w-max"
          onClick={resetTargetTime}
        >
          Choose another time
        </Button>

        <Form.Item>
          <Button
            className="mt-5"
            size="large"
            type="primary"
            htmlType="submit"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Make an appointment
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

import { Button, DatePicker, Form, Input } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { useFormikContext } from "formik";
import dayjs from "dayjs";
import { CreateAppointmentMutationVariables } from "../../../../api/__generated__/graphql";
import FormErrorMessage from "../../../../common/components/errors/FormErrorMessage";

export default function AppointmentFormSetDate() {
  const formik = useFormikContext<CreateAppointmentMutationVariables>();

  return (
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
      <Form.Item<CreateAppointmentMutationVariables>
        label="appointment date"
        validateStatus={
          formik.errors.createAppointmentInput?.targetTime && "error"
        }
      >
        <DatePicker
          style={{ width: "100%" }}
          minDate={dayjs(new Date())}
          showTime
          name="createAppointmentInput.targetTime"
          onBlur={() =>
            formik.setFieldTouched("createAppointmentInput.targetTime", true)
          }
          onChange={(date) => {
            formik.setFieldValue("createAppointmentInput.targetTime", date);
          }}
        />
        <FormErrorMessage name="createAppointmentInput.targetTime" />
      </Form.Item>

      <Form.Item<CreateAppointmentMutationVariables>
        label="email"
        validateStatus={formik.errors.customerDataInput?.email && "error"}
      >
        <Input
          //   required
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
        <Input.TextArea
          name="customerDataInput.phone"
          spellCheck="false"
          autoSize={true}
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
        style={{ maxWidth: "max-content" }}
        onClick={() => formik.resetForm()}
      >
        Choose another artist
      </Button>

      <Form.Item>
        <Button
          style={{ padding: "24px", marginTop: "4vh" }}
          size="large"
          type="primary"
          htmlType="submit"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          Make an appointment
        </Button>
      </Form.Item>
    </Form>
  );
}

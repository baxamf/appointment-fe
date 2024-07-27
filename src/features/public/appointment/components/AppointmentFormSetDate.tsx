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
      className="grid gap-5 min-w-[400px]"
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
          className="w-full py-2.5"
          minDate={dayjs()}
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
        onClick={() => formik.resetForm()}
      >
        Choose another artist
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
  );
}

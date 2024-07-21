import { Flex, Form, Input, Image, Button, Alert } from "antd";
import FormErrorMessage from "../../../../../common/components/errors/FormErrorMessage";
import { useFormikContext } from "formik";
import {
  CreateCompanyServiceInput,
  UpdateCompanyServiceInput,
} from "../../../../../api/__generated__/graphql";
import { FormCommonProps } from "../../../../../common/types/form";

export default function AdminServiceForm({
  error,
  errorMessage,
  submitDisabled,
}: FormCommonProps) {
  const formik = useFormikContext<
    UpdateCompanyServiceInput | CreateCompanyServiceInput
  >();

  type CompanyServiceInputType = typeof formik.initialValues;

  return (
    <Form
      name="basic"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "4vw",
      }}
      initialValues={formik.initialValues}
      onSubmitCapture={formik.handleSubmit}
      autoComplete="off"
      layout="vertical"
    >
      <Flex vertical gap="4vh" style={{ flex: "1 0 25vw" }}>
        <Form.Item<CompanyServiceInputType>
          label="title"
          validateStatus={formik.errors.title && "error"}
        >
          <Input.TextArea
            name="title"
            autoSize={true}
            value={formik.values.title || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="title" />
        </Form.Item>

        <Form.Item<CompanyServiceInputType>
          label="description"
          validateStatus={formik.errors.description && "error"}
        >
          <Input.TextArea
            name="description"
            autoSize={true}
            value={formik.values.description || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="description" />
        </Form.Item>
      </Flex>

      <Flex vertical gap="4vh" style={{ flex: "1 0 20vw" }}>
        <Form.Item<CompanyServiceInputType>
          label="image"
          validateStatus={formik.errors.description && "error"}
        >
          <Input.TextArea
            name="image"
            spellCheck="false"
            autoSize={true}
            value={formik.values.image || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <FormErrorMessage name="image" />
        </Form.Item>

        {!!formik.values.image && (
          <Image
            src={formik.values.image || ""}
            preview={false}
            width="100%"
            style={{ objectFit: "cover", aspectRatio: "4/3" }}
          />
        )}
      </Flex>

      <Form.Item style={{ flex: "1 0 25vw" }}>
        <Button
          style={{ paddingBlock: "24px" }}
          size="large"
          type="primary"
          htmlType="submit"
          disabled={submitDisabled || !formik.dirty}
        >
          Save changes
        </Button>
      </Form.Item>

      {error && <Alert message={errorMessage} type="error" />}
    </Form>
  );
}

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
      className="flex flex-wrap gap-x-[4vw] gap-y-[2vh]"
      initialValues={formik.initialValues}
      onSubmitCapture={formik.handleSubmit}
      autoComplete="off"
      layout="vertical"
    >
      <Flex className="flex-col gap-[2vh] flex-1 basis-[25vw]">
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
            className="leading-6"
            name="description"
            autoSize={true}
            value={formik.values.description || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="description" />
        </Form.Item>
      </Flex>

      <Flex className="flex-col gap-[2vh] flex-1 basis-[20vw]">
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
            className="object-cover aspect-[4/3]"
          />
        )}
      </Flex>

      <Form.Item className="mt-[2vh] flex-1 basis-full">
        <Button
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

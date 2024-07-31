import {
  Alert,
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
  Image,
  Typography,
} from "antd";
import { useFormikContext } from "formik";
import {
  CreateStaffServiceInput,
  UpdateStaffServiceInput,
} from "../../../../../api/__generated__/graphql";
import FormErrorMessage from "../../../../../common/components/errors/FormErrorMessage";
import { DefaultOptionType } from "antd/es/select";

type StaffServiceFormProps = {
  options: DefaultOptionType[];
  error: boolean;
  errorMessage?: string;
  submitDisabled: boolean;
};

export default function StaffServiceForm({
  options,
  error,
  errorMessage,
  submitDisabled,
}: StaffServiceFormProps) {
  const formik = useFormikContext<
    CreateStaffServiceInput | UpdateStaffServiceInput
  >();
  type StaffServiceFormInputType = typeof formik.initialValues;

  return (
    <Form
      name="basic"
      className="flex flex-wrap gap-[2vw]"
      initialValues={formik.initialValues}
      onSubmitCapture={formik.handleSubmit}
      autoComplete="off"
      layout="vertical"
    >
      <Typography.Title type="secondary" className="w-full" level={2}>
        Staff Service
      </Typography.Title>

      <Flex className="flex-wrap gap-[4vw]">
        <Flex className="flex-col gap-[2vh] flex-1 basis-[30vw]">
          <Form.Item<StaffServiceFormInputType>
            label="service"
            validateStatus={formik.errors.serviceId && "error"}
          >
            <Select
              size="large"
              options={options}
              value={formik.values.serviceId}
              onBlur={formik.handleBlur}
              onChange={(serviceId) =>
                formik.setFieldValue("serviceId", serviceId)
              }
            />
            <FormErrorMessage name="serviceId" />
          </Form.Item>

          <Form.Item<StaffServiceFormInputType>
            label="title"
            validateStatus={formik.errors.title && "error"}
          >
            <Input
              name="title"
              value={formik.values.title || ""}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormErrorMessage name="title" />
          </Form.Item>

          <Form.Item<StaffServiceFormInputType>
            label="description"
            validateStatus={formik.errors.description && "error"}
          >
            <Input.TextArea
              size="large"
              className="leading-6"
              name="description"
              autoSize={true}
              value={formik.values.description || ""}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormErrorMessage name="description" />
          </Form.Item>

          <Flex className="gap-[2vw]">
            <Form.Item<StaffServiceFormInputType>
              label="duration"
              validateStatus={formik.errors.duration && "error"}
            >
              <InputNumber
                controls={false}
                name="duration"
                size="large"
                value={formik.values.duration || 0}
                onBlur={formik.handleBlur}
                onChange={(duration) =>
                  formik.setFieldValue("duration", duration)
                }
              />
              <FormErrorMessage name="duration" />
            </Form.Item>

            <Form.Item<StaffServiceFormInputType>
              label="price"
              validateStatus={formik.errors.price && "error"}
            >
              <InputNumber
                controls={false}
                size="large"
                name="price"
                value={formik.values.price || 0}
                onBlur={formik.handleBlur}
                onChange={(price) => formik.setFieldValue("price", price)}
              />
              <FormErrorMessage name="price" />
            </Form.Item>
          </Flex>
        </Flex>

        <Flex className="flex-col gap-[4vh] flex-1 basis-[15vw]">
          <Form.Item<StaffServiceFormInputType>
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
              width="100%"
              className="object-cover aspect-[4/3]"
            />
          )}
        </Flex>
      </Flex>

      <Form.Item className="w-full">
        <Button
          ghost
          type="primary"
          htmlType="submit"
          disabled={submitDisabled || !formik.isValid || !formik.dirty}
        >
          Save service
        </Button>
      </Form.Item>

      {error && <Alert message={errorMessage} type="error" />}
    </Form>
  );
}

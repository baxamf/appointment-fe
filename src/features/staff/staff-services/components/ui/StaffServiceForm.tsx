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
  Upload,
} from "antd";
import { FormikContextType } from "formik";
import {
  CreateStaffServiceInput,
  UpdateStaffServiceInput,
} from "../../../../../api/__generated__/graphql";
import FormErrorMessage from "../../../../../common/components/errors/FormErrorMessage";
import { DefaultOptionType } from "antd/es/select";
import { acceptImages } from "../../../../../common/constants/accept-image-upload-types";
import { useState } from "react";
import { blobToImgSrc } from "../../../../../common/utils/blob-to-img-source";

type StaffServiceFormProps<T> = {
  options: DefaultOptionType[];
  error: boolean;
  errorMessage?: string;
  submitDisabled: boolean;
  image?: string | null;
  formik: FormikContextType<T>;
};

export default function StaffServiceForm<
  T extends CreateStaffServiceInput | UpdateStaffServiceInput
>({ options, error, errorMessage, image, formik }: StaffServiceFormProps<T>) {
  const [preview, setPreview] = useState(image);

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
          <Form.Item<T>
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

          <Form.Item<T>
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

          <Form.Item<T>
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
            <Form.Item<T>
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

            <Form.Item<T>
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
          <Form.Item<T>
            label="image"
            validateStatus={formik.errors.description && "error"}
          >
            <Upload
              name="image"
              customRequest={(info) => formik.setFieldValue("image", info.file)}
              showUploadList={false}
              maxCount={1}
              accept={acceptImages}
              onChange={async (info) => {
                const file = info.file.originFileObj as Blob;
                const preview = await blobToImgSrc(file);
                setPreview(preview);
              }}
            >
              <Button>Upload</Button>
            </Upload>

            {formik.values.image && (
              <Button
                className="ml-[1vw]"
                onClick={() => {
                  formik.setFieldValue("image", undefined);
                  setPreview(image);
                }}
              >
                Reset
              </Button>
            )}

            <FormErrorMessage name="image" />
          </Form.Item>

          {!!preview && (
            <Image
              src={preview || ""}
              width="100%"
              className="object-cover aspect-[16/10]"
            />
          )}
        </Flex>
      </Flex>

      <Form.Item className="w-full">
        <Button
          ghost
          type="primary"
          htmlType="submit"
          disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
        >
          Save service
        </Button>
      </Form.Item>

      {error && <Alert message={errorMessage} type="error" />}
    </Form>
  );
}

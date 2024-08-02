import { Flex, Form, Input, Image, Button, Alert, Upload } from "antd";
import FormErrorMessage from "../../../../../common/components/errors/FormErrorMessage";
import { FormikContextType } from "formik";
import {
  CreateCompanyServiceInput,
  UpdateCompanyServiceInput,
} from "../../../../../api/__generated__/graphql";
import { FormCommonProps } from "../../../../../common/types/form";
import { useState } from "react";
import { acceptImages } from "../../../../../common/constants/accept-image-upload-types";
import { blobToImgSrc } from "../../../../../common/utils/blob-to-img-source";

type AdminServiceFormProps<T> = {
  formik: FormikContextType<T>;
  image?: string | null;
} & FormCommonProps;

export default function AdminServiceForm<
  T extends UpdateCompanyServiceInput | CreateCompanyServiceInput
>({ errorMessage, formik, image }: AdminServiceFormProps<T>) {
  const [preview, setPreview] = useState(image);

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
        <Form.Item<T>
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

        <Form.Item<T>
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

          {formik.initialValues.image !== formik.values.image && (
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
            className="object-cover aspect-[4/3]"
          />
        )}
      </Flex>

      <Form.Item className="mt-[2vh] flex-1 basis-full">
        <Button
          ghost
          size="large"
          type="primary"
          htmlType="submit"
          disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
        >
          Save service
        </Button>
      </Form.Item>

      {errorMessage && <Alert message={errorMessage} type="error" />}
    </Form>
  );
}

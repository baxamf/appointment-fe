import { Form, Input, Image, Button, Alert, Upload } from "antd";
import { CloseSquareFilled } from "@ant-design/icons";
import FormErrorMessage from "../../../../../common/components/errors/FormErrorMessage";
import { FormikContextType } from "formik";
import {
  CreateCompanyServiceInput,
  UpdateCompanyServiceInput,
} from "../../../../../api/__generated__/graphql";
import { FormCommonProps } from "../../../../../common/types/form";
import { useState } from "react";
import { ACCEPT_IMAGES } from "../../../../../common/constants/accept-image-upload-types";
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
      className="grid w-2/3 gap-[2vh]"
      initialValues={formik.initialValues}
      onSubmitCapture={formik.handleSubmit}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<T>
        label="title"
        validateStatus={formik.errors.title && "error"}
      >
        <Input.TextArea
          className="leading-6"
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
      <Form.Item<T>
        label="image"
        validateStatus={formik.errors.image && "error"}
      >
        {!!preview && (
          <div className="flex h-[25vh] gap-[1vw]">
            <Image
              src={preview || ""}
              className="object-cover aspect-[16/10] h-full"
            />

            <Button
              className="px-6"
              icon={<CloseSquareFilled />}
              onClick={() => {
                formik.setFieldValue("image", null);
                setPreview(null);
              }}
              type="text"
              danger
            />
          </div>
        )}

        <Upload
          className="block"
          name="image"
          customRequest={(info) => formik.setFieldValue("image", info.file)}
          showUploadList={false}
          maxCount={1}
          accept={ACCEPT_IMAGES}
          onChange={async (info) => {
            const file = info.file.originFileObj as Blob;
            const preview = await blobToImgSrc(file);
            setPreview(preview);
          }}
        >
          {!preview && (
            <div className="flex gap-[1vw]">
              <div className="grid place-content-center h-[25vh] aspect-[16/10] border-dashed border-secondary border cursor-pointer">
                Upload
              </div>

              {image && image != preview && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    formik.setFieldValue("image", undefined);
                    setPreview(image);
                  }}
                >
                  Reset
                </Button>
              )}
            </div>
          )}
        </Upload>

        <FormErrorMessage name="image" />
      </Form.Item>

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

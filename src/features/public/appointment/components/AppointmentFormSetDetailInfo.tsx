import { Button, Form, Input, Image, Upload } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { CreateAppointmentMutationVariables } from "../../../../api/__generated__/graphql";
import FormErrorMessage from "../../../../common/components/errors/FormErrorMessage";
import { useAppointmentFormControls } from "../hooks/useAppointmentFormControls";
import PageTransition from "../../../../common/components/transitions/PageTransition";
import { useState } from "react";
import { ACCEPT_IMAGES } from "../../../../common/constants/accept-image-upload-types";
import { blobToImgSrc } from "../../../../common/utils/blob-to-img-source";

export default function AppointmentFormSetDetailInfo() {
  const { formik, resetTargetTime } = useAppointmentFormControls();
  const [preview, setPreview] = useState<string | null>(null);

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

        <Form.Item<CreateAppointmentMutationVariables>
          label="image"
          validateStatus={
            formik.errors.createAppointmentInput?.images && "error"
          }
        >
          {!!preview && (
            <div className="flex h-[10vh]">
              <Image
                src={preview || ""}
                className="object-cover aspect-[16/10] h-full"
              />

              <Button
                className="ml-[1vw]"
                onClick={(e) => {
                  e.stopPropagation();
                  formik.setFieldValue(
                    "createAppointmentInput.images",
                    undefined
                  );
                  setPreview(null);
                }}
              >
                Reset
              </Button>
            </div>
          )}

          <Upload
            className="block text-left"
            name="createAppointmentInput.images"
            customRequest={(info) =>
              formik.setFieldValue("createAppointmentInput.images", [info.file])
            }
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
              <div className="grid place-content-center h-[10vh] aspect-[16/10] border-dashed border-secondary border cursor-pointer">
                Upload
              </div>
            )}
          </Upload>

          <FormErrorMessage name="image" />
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

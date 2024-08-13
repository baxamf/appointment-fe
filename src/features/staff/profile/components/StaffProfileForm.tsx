import { FormikProvider, useFormik } from "formik";
import { Form, Image, Upload, Alert, Button, Input } from "antd";
import { CloseSquareFilled } from "@ant-design/icons";
import { useUpdateMyProfile } from "../hooks/useUpdateMyProfile";
import { MyProfile } from "../types";
import { UpdateUserProfileInput } from "../../../../api/__generated__/graphql";
import FormErrorMessage from "../../../../common/components/errors/FormErrorMessage";
import { useState } from "react";
import { ACCEPT_IMAGES } from "../../../../common/constants/accept-image-upload-types";
import { blobToImgSrc } from "../../../../common/utils/blob-to-img-source";

type StaffProfileFormProps = MyProfile;

export default function StaffProfileForm({
  avatar,
  ...profile
}: StaffProfileFormProps) {
  const { updateProfile, errorMessage } = useUpdateMyProfile();
  const [preview, setPreview] = useState(avatar);

  const formik = useFormik<UpdateUserProfileInput>({
    initialValues: profile,
    onSubmit: updateProfile,
  });

  return (
    <FormikProvider value={formik}>
      <Form
        className="grid gap-[2vh] w-2/3"
        initialValues={formik.initialValues}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<UpdateUserProfileInput>
          label="first name"
          validateStatus={formik.errors.firstName && "error"}
        >
          <Input
            name="firstName"
            value={formik.values.firstName || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="firstName" />
        </Form.Item>

        <Form.Item<UpdateUserProfileInput>
          label="last name"
          validateStatus={formik.errors.lastName && "error"}
        >
          <Input
            name="lastName"
            value={formik.values.lastName || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="lastName" />
        </Form.Item>

        <Form.Item<UpdateUserProfileInput>
          label="nickname"
          validateStatus={formik.errors.nickName && "error"}
        >
          <Input
            name="nickName"
            value={formik.values.nickName || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="nickName" />
        </Form.Item>

        <Form.Item<UpdateUserProfileInput>
          label="bio"
          validateStatus={formik.errors.bio && "error"}
        >
          <Input.TextArea
            size="large"
            className="leading-6"
            name="description"
            autoSize={true}
            value={formik.values.bio || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="bio" />
        </Form.Item>

        <Form.Item<UpdateUserProfileInput>
          label="phone"
          validateStatus={formik.errors.phone && "error"}
        >
          <Input
            name="phone"
            value={formik.values.phone || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormErrorMessage name="phone" />
        </Form.Item>

        <Form.Item<UpdateUserProfileInput>
          label="avatar"
          validateStatus={formik.errors.avatar && "error"}
        >
          {!!preview && (
            <div className="flex h-[25vh] gap-[1vw]">
              <Image
                src={preview || ""}
                className="object-cover aspect-[10/16] h-full"
              />

              <Button
                className="px-6"
                icon={<CloseSquareFilled />}
                onClick={() => {
                  formik.setFieldValue("avatar", undefined);
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
            customRequest={(info) => formik.setFieldValue("avatar", info.file)}
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
                <div className="grid place-content-center h-[25vh] aspect-[10/16] border-dashed border-secondary border cursor-pointer">
                  Upload
                </div>

                {avatar != preview && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      formik.setFieldValue("avatar", undefined);
                      setPreview(avatar);
                    }}
                  >
                    Reset
                  </Button>
                )}
              </div>
            )}
          </Upload>

          <FormErrorMessage name="avatar" />
        </Form.Item>

        <Form.Item className="w-full mt-[2vh]">
          <Button
            ghost
            type="primary"
            htmlType="submit"
            disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
          >
            Save changes
          </Button>
        </Form.Item>

        {errorMessage && <Alert message={errorMessage} type="error" />}
      </Form>
    </FormikProvider>
  );
}

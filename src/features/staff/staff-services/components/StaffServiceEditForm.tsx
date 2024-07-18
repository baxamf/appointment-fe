import { FormikProvider, useFormik } from "formik";
import {
  GetMyStaffServiceQuery,
  UpdateStaffServiceInput,
} from "../../../../api/__generated__/graphql";
import FormErrorMessage from "../../../../common/components/errors/FormErrorMessage";
import { Form, Alert, Button, Input, Image, InputNumber, Flex } from "antd";
import { useUpdateMyStaffService } from "../hooks/useUpdateMyStaffService";

type StaffServiceEditFormProps = Omit<
  GetMyStaffServiceQuery["getStaffService"],
  "service"
>;

export default function StaffServiceEditForm({
  ...serviceData
}: StaffServiceEditFormProps) {
  const { updateMyStaffService, updateError, updateLoading } =
    useUpdateMyStaffService();

  const formik = useFormik<UpdateStaffServiceInput>({
    initialValues: serviceData,
    onSubmit: updateMyStaffService,
  });

  return (
    <FormikProvider value={formik}>
      <Form
        name="basic"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4vw",
          justifyContent: "center",
        }}
        initialValues={formik.initialValues}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Flex vertical gap="4vh" style={{ flex: "1 0 25vw" }}>
          <Form.Item<UpdateStaffServiceInput>
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

          <Form.Item<UpdateStaffServiceInput>
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

          <Form.Item<UpdateStaffServiceInput>
            label="duration"
            validateStatus={formik.errors.duration && "error"}
          >
            <InputNumber
              controls={false}
              style={{ width: "100%" }}
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

          <Form.Item<UpdateStaffServiceInput>
            label="price"
            validateStatus={formik.errors.price && "error"}
          >
            <InputNumber
              controls={false}
              style={{ width: "100%" }}
              size="large"
              name="price"
              value={formik.values.price || 0}
              onBlur={formik.handleBlur}
              onChange={(price) => formik.setFieldValue("price", price)}
            />
            <FormErrorMessage name="price" />
          </Form.Item>
        </Flex>

        <Flex vertical gap="4vh" style={{ flex: "1 0 20vw" }}>
          <Form.Item<UpdateStaffServiceInput>
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

          <Image
            src={formik.values.image || ""}
            width="100%"
            style={{ objectFit: "cover", aspectRatio: "4/3" }}
          />
        </Flex>

        <Form.Item style={{ flex: "0 0 25vw" }}>
          <Button
            style={{ paddingBlock: "24px" }}
            size="large"
            type="primary"
            htmlType="submit"
            disabled={updateLoading || !formik.dirty}
          >
            Save changes
          </Button>
        </Form.Item>

        {updateError && <Alert message={updateError.message} type="error" />}
      </Form>
    </FormikProvider>
  );
}

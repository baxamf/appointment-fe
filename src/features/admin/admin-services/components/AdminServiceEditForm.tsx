import { FormikProvider, useFormik } from "formik";
import {
  GetAdminCompanyServiceQuery,
  UpdateCompanyServiceInput,
} from "../../../../api/__generated__/graphql";
import { useUpdateCompanyService } from "../hooks/useUpdateCompanyService";
import FormErrorMessage from "../../../../common/components/errors/FormErrorMessage";
import { Form, Alert, Button, Input, Image } from "antd";

type AdminServiceEditFormProps = Partial<
  GetAdminCompanyServiceQuery["getCompanyService"]
>;

export default function AdminServiceEditForm({
  title,
  description,
  image,
}: AdminServiceEditFormProps) {
  const { updateCompanyService, updateError, updateLoading } =
    useUpdateCompanyService();

  const formik = useFormik<UpdateCompanyServiceInput>({
    initialValues: {
      title: title,
      description: description,
      image: image,
    },
    onSubmit: updateCompanyService,
  });

  return (
    <FormikProvider value={formik}>
      <Form
        name="basic"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
        initialValues={formik.initialValues}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<UpdateCompanyServiceInput>
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

        <Form.Item<UpdateCompanyServiceInput>
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

        <Form.Item<UpdateCompanyServiceInput>
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
          preview={false}
          width="100%"
          style={{ objectFit: "cover", aspectRatio: "4/3" }}
        />

        <Form.Item>
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

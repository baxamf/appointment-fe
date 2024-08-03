import { FormikProvider, useFormik } from "formik";
import {
  GetAdminCompanyServiceQuery,
  UpdateCompanyServiceInput,
} from "../../../../api/__generated__/graphql";
import { useUpdateCompanyService } from "../hooks/useUpdateCompanyService";
import AdminServiceForm from "./ui/AdminServiceForm";
import { Typography } from "antd";

type AdminServiceEditFormProps =
  GetAdminCompanyServiceQuery["getCompanyService"];

export default function AdminServiceEditForm({
  title,
  description,
  image,
}: AdminServiceEditFormProps) {
  const { submitFormHandler, ...formData } = useUpdateCompanyService();

  const formik = useFormik<UpdateCompanyServiceInput>({
    initialValues: {
      title,
      description,
    },
    onSubmit: submitFormHandler,
  });

  return (
    <FormikProvider value={formik}>
      <Typography.Title type="secondary" className="mb-[4vh]" level={2}>
        Details
      </Typography.Title>

      <AdminServiceForm {...{ ...formData, image, formik }} />
    </FormikProvider>
  );
}

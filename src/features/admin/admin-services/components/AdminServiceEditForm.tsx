import { FormikProvider, useFormik } from "formik";
import {
  GetAdminCompanyServiceQuery,
  UpdateCompanyServiceInput,
} from "../../../../api/__generated__/graphql";
import { useUpdateCompanyService } from "../hooks/useUpdateCompanyService";
import AdminServiceForm from "./ui/AdminServiceForm";

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
      <AdminServiceForm {...{ ...formData, image, formik }} />
    </FormikProvider>
  );
}

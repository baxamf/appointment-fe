import { FormikProvider, useFormik } from "formik";
import { CreateCompanyServiceInput } from "../../../../api/__generated__/graphql";
import AdminServiceForm from "./ui/AdminServiceForm";
import { useCreateCompanyService } from "../hooks/useCreateCompanyService";
import { createCompanyServiceValidationSchema } from "../utils/formik/create-company-service-validation-schema";

export default function AdminServiceCreateForm() {
  const { submitFormHandler, ...formData } = useCreateCompanyService();

  const formik = useFormik<CreateCompanyServiceInput>({
    initialValues: {
      title: "",
      description: "",
      image: undefined,
    },
    validationSchema: createCompanyServiceValidationSchema,
    onSubmit: submitFormHandler,
  });

  return (
    <FormikProvider value={formik}>
      <AdminServiceForm {...{ ...formData, formik }} />
    </FormikProvider>
  );
}

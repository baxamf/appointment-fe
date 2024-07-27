import { FormikProvider, useFormik } from "formik";
import {
  CreateStaffServiceInput,
  GetCompanyServicesForStaffServiceCreateQuery,
} from "../../../../api/__generated__/graphql";
import { useCreateStaffService } from "../hooks/useCreateStaffService";
import { createStaffServiceValidationSchema } from "../utils/formik/create-staff-service-validation-schema";
import StaffServiceForm from "./ui/StaffServiceForm";
import { DefaultOptionType } from "antd/es/select";
import StaffServiceParentService from "./ui/StaffServiceParentService";
import { useMemo } from "react";
import StaffServiceFormLayout from "./ui/StaffServiceFormLayout";

type StaffServiceEditFormProps = {
  companyServices: Omit<
    GetCompanyServicesForStaffServiceCreateQuery["getCompanyServices"],
    "__typename"
  >;
  options: DefaultOptionType[];
};

export default function StaffServiceCreateForm({
  companyServices,
  options,
}: StaffServiceEditFormProps) {
  const { createStaffService, ...formProps } = useCreateStaffService();

  const formik = useFormik<CreateStaffServiceInput>({
    validationSchema: createStaffServiceValidationSchema,
    initialValues: {
      title: "",
      description: "",
      image: "",
      price: 0,
      duration: 60,
      serviceId: options[0].value as number,
    },
    onSubmit: createStaffService,
  });

  const companyService = useMemo(
    () => companyServices.find(({ id }) => id === formik.values.serviceId),
    [companyServices, formik.values.serviceId]
  );

  if (companyService)
    return (
      <FormikProvider value={formik}>
        <StaffServiceFormLayout>
          <StaffServiceParentService {...companyService} />

          <StaffServiceForm {...{ ...formProps, options }} />
        </StaffServiceFormLayout>
      </FormikProvider>
    );
}

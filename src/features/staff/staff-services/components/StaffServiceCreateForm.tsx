import { FormikProvider, useFormik } from "formik";
import {
  CreateStaffServiceInput,
  GetCompanyServicesForStaffServiceCreateQuery,
} from "../../../../api/__generated__/graphql";
import { useCreateStaffService } from "../hooks/useCreateStaffService";
import { createStaffServiceValidationSchema } from "../utils/formik/create-staff-service-validation-schema";
import StaffServiceForm, { StaffServiceFormProps } from "./ui/StaffServiceForm";
import { DefaultOptionType } from "antd/es/select";
import { Typography } from "antd";
import StaffServiceParentService from "./StaffServiceParentService";
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
  const {
    createStaffService,
    createStaffServiceLoading,
    createStaffServiceError,
  } = useCreateStaffService();

  const formProps: StaffServiceFormProps = {
    options,
    error: !!createStaffServiceError,
    errorMessage: createStaffServiceError?.message,
    submitDisabled: createStaffServiceLoading,
  };

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

  return (
    <FormikProvider value={formik}>
      <StaffServiceFormLayout>
        <Typography.Title
          type="secondary"
          style={{ marginBottom: "2vh" }}
          level={2}
        >
          Parent Service
        </Typography.Title>

        {!!companyService && <StaffServiceParentService {...companyService} />}

        <Typography.Title
          type="secondary"
          style={{ marginBottom: "2vh" }}
          level={2}
        >
          Staff service
        </Typography.Title>

        <StaffServiceForm {...formProps} />
      </StaffServiceFormLayout>
    </FormikProvider>
  );
}

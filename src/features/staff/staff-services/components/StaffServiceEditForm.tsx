import { FormikProvider, useFormik } from "formik";
import {
  GetCompanyServicesForStaffServiceCreateQuery,
  GetMyStaffServiceQuery,
  UpdateStaffServiceInput,
} from "../../../../api/__generated__/graphql";
import { useUpdateMyStaffService } from "../hooks/useUpdateMyStaffService";
import StaffServiceForm from "./ui/StaffServiceForm";
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
  staffService: Omit<GetMyStaffServiceQuery["getStaffService"], "__typename">;
  options: DefaultOptionType[];
};

export default function StaffServiceEditForm({
  staffService,
  options,
  companyServices,
}: StaffServiceEditFormProps) {
  const { updateMyStaffService, ...formProps } = useUpdateMyStaffService();

  const formik = useFormik<UpdateStaffServiceInput>({
    initialValues: staffService,
    onSubmit: updateMyStaffService,
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
          Staff Service
        </Typography.Title>

        <StaffServiceForm {...{ ...formProps, options }} />
      </StaffServiceFormLayout>
    </FormikProvider>
  );
}
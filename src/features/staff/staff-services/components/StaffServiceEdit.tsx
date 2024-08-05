import { useGetMyStaffService } from "../hooks/useGetMyStaffService";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import StaffServiceEditForm from "./StaffServiceEditForm";
import { useGetCompanyServicesForStaffServiceCreate } from "../hooks/useGetCompanyServicesForStaffServiceCreate";

export default function StaffServiceEdit() {
  const { staffService, staffServiceLoading, staffServiceError } =
    useGetMyStaffService();

  const {
    companyServiceLoading,
    companyServiceError,
    options,
    companyServices,
  } = useGetCompanyServicesForStaffServiceCreate();

  if (staffServiceLoading || companyServiceLoading) return <Loading />;

  if (staffServiceError)
    return <ErrorPage message={staffServiceError.message} />;

  if (companyServiceError)
    return <ErrorPage message={companyServiceError.message} />;

  if (staffService && options && companyServices) {
    return (
      <StaffServiceEditForm {...{ staffService, options, companyServices }} />
    );
  }
}

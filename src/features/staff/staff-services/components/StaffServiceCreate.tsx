import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { useGetCompanyServicesForStaffServiceCreate } from "../hooks/useGetCompanyServicesForStaffServiceCreate";
import StaffServiceCreateForm from "./StaffServiceCreateForm";

export default function StaffServiceCreate() {
  const {
    companyServices,
    companyServiceLoading,
    companyServiceError,
    options,
  } = useGetCompanyServicesForStaffServiceCreate();

  if (companyServiceLoading) return <Loading />;

  if (companyServiceError)
    return <ErrorPage message={companyServiceError.message} />;

  if (companyServices && options) {
    return <StaffServiceCreateForm {...{ companyServices, options }} />;
  }
}

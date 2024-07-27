import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { useGetAdminStaffInfo } from "../hooks/useGetAdminStaffInfo";
import AdminStaffInfoScreen from "./ui/AdminStaffInfoScreen";

export default function AdminStaffInfo() {
  const { staffInfo, staffInfoLoading, StaffInfoError } =
    useGetAdminStaffInfo();

  if (staffInfoLoading) return <Loading />;

  if (StaffInfoError) return <ErrorPage message={StaffInfoError.message} />;

  if (staffInfo) return <AdminStaffInfoScreen {...staffInfo} />;
}

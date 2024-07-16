import { Flex } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import AdminStaffListItem from "./AdminStaffListItem";
import { useGetAdminStaff } from "../hooks/useGetAdminStaff";
import AddStaffListCard from "../ui/AddStaffListCard";

export default function AdminStaffList() {
  const { adminStaff, adminStaffLoading, adminStaffError } = useGetAdminStaff();

  if (adminStaffLoading) return <Loading />;

  if (adminStaffError) return <ErrorPage message={adminStaffError.message} />;

  if (adminStaff)
    return (
      <Flex gap="2vw" wrap>
        <AddStaffListCard />

        {adminStaff.map((staff) => (
          <AdminStaffListItem key={staff.id} {...staff} />
        ))}
      </Flex>
    );
}

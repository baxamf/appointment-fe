import { Flex } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import AdminStaffListItem from "./ui/AdminStaffListItem";
import { useGetAdminStaff } from "../hooks/useGetAdminStaff";
import AddStaffListCard from "./ui/AddStaffListCard";

export default function AdminStaffList() {
  const { adminStaff, adminStaffLoading, adminStaffError } = useGetAdminStaff();

  if (adminStaffLoading) return <Loading />;

  if (adminStaffError) return <ErrorPage message={adminStaffError.message} />;

  if (adminStaff)
    return (
      <Flex className="flex-wrap gap-[2vw]">
        {adminStaff.map((staff) => (
          <AdminStaffListItem key={staff.id} {...staff} />
        ))}

        <AddStaffListCard />
      </Flex>
    );
}

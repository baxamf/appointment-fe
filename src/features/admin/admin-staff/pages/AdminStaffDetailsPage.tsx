import { Flex } from "antd";
import AdminStaffInfo from "../components/AdminStaffInfo";
import AdminStaffWorkingDays from "../components/AdminStaffWorkingDays";

export default function AdminStaffDetailsPage() {
  return (
    <Flex gap="2vw" wrap>
      <AdminStaffInfo />
      <AdminStaffWorkingDays />
    </Flex>
  );
}

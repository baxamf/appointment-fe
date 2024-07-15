import { Flex } from "antd";
import AdminStaffList from "../components/AdminStaffList";

export default function AdminStaffPage() {
  return (
    <Flex gap="2vw" wrap>
      <AdminStaffList />
    </Flex>
  );
}

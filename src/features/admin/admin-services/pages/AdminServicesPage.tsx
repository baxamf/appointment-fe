import { Flex } from "antd";
import AdminServicesList from "../components/AdminServicesList";

export default function AdminServicesPage() {
  return (
    <Flex gap="2vw" wrap>
      <AdminServicesList />
    </Flex>
  );
}

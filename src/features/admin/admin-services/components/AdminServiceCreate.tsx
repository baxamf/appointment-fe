import { Card, Flex, Typography } from "antd";
import AdminServiceCreateForm from "./AdminServiceCreateForm";

export default function AdminServiceCreate() {
  return (
    <Flex gap="4vh" wrap>
      <Card style={{ padding: "2vh 5vw", flex: 1 }}>
        <Typography.Title
          type="secondary"
          style={{ marginBottom: "2vh" }}
          level={2}
        >
          Details
        </Typography.Title>

        <AdminServiceCreateForm />
      </Card>
    </Flex>
  );
}

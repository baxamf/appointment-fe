import { Card, Typography } from "antd";
import AdminServiceCreateForm from "./AdminServiceCreateForm";

export default function AdminServiceCreate() {
  return (
    <Card className="px-[4vw] py-[2vh]">
      <Typography.Title type="secondary" className="mb-[4vh]" level={2}>
        Details
      </Typography.Title>

      <AdminServiceCreateForm />
    </Card>
  );
}

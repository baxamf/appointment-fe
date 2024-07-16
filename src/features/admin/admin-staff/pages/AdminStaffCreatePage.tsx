import { Card, Flex, Typography, Image } from "antd";
import AdminStaffCreateForm from "../components/AdminStaffCreateForm";

export default function AdminStaffCreatePage() {
  return (
    <Flex gap="2vw" wrap justify="stretch">
      <Card style={{ padding: "4vh 5vw" }}>
        <Flex wrap vertical gap="2vh">
          <Typography.Title level={2}>Add staff</Typography.Title>

          <AdminStaffCreateForm />
        </Flex>
      </Card>

      <Flex style={{ flex: "1 1 20vw" }}>
        <Image
          preview={false}
          height="100%"
          src="https://images.pexels.com/photos/4459231/pexels-photo-4459231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{
            objectFit: "cover",
            aspectRatio: "1/1",
          }}
        />
      </Flex>
    </Flex>
  );
}

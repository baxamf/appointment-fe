import { Card, Flex, Typography, Image } from "antd";
import AdminStaffCreateForm from "./AdminStaffCreateForm";

export default function AdminStaffCreate() {
  return (
    <Flex gap="4vw" wrap>
      <Card style={{ padding: "4vh 5vw" }}>
        <Flex wrap vertical gap="2vh">
          <Typography.Title type="secondary" level={2}>
            Staff details
          </Typography.Title>

          <AdminStaffCreateForm />
        </Flex>
      </Card>

      <Flex style={{ flex: "1 1 25vw" }}>
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

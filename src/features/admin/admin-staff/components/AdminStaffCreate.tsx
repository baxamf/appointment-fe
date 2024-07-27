import { Card, Flex, Typography, Image } from "antd";
import AdminStaffCreateForm from "./AdminStaffCreateForm";

export default function AdminStaffCreate() {
  return (
    <Flex className="flex-wrap gap-[4vw]">
      <Card className="px-[4vw] py-[2vh] flex-1">
        <Flex className="flex-col flex-wrap gap-[4vh]">
          <Typography.Title type="secondary" level={2}>
            Staff details
          </Typography.Title>

          <AdminStaffCreateForm />
        </Flex>
      </Card>

      <Flex className="flex-1 basis-[25vw]">
        <Image
          preview={false}
          height="100%"
          src="https://images.pexels.com/photos/4459231/pexels-photo-4459231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover aspect-[3/4]"
        />
      </Flex>
    </Flex>
  );
}

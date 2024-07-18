import { Divider, Flex, Typography, Image } from "antd";
import { GetMyStaffServiceQuery } from "../../../../api/__generated__/graphql";

type StaffServiceEditParentServiceProps =
  GetMyStaffServiceQuery["getStaffService"]["service"];

export default function StaffServiceEditParentService({
  title,
  description,
  image,
}: StaffServiceEditParentServiceProps) {
  return (
    <Flex gap="4vw" justify="center" wrap>
      <div style={{ flex: "1 0 25vw" }}>
        <Divider>title</Divider>
        <Typography.Title style={{ marginBottom: "4vh" }} level={3}>
          {title}
        </Typography.Title>

        <Divider>description</Divider>
        <Typography.Paragraph type="secondary">
          {description}
        </Typography.Paragraph>
      </div>

      <div style={{ flex: "1 0 20vw" }}>
        <Divider>image</Divider>
        <Image
          src={image}
          width="100%"
          style={{ objectFit: "cover", aspectRatio: "16/10" }}
        />
      </div>
    </Flex>
  );
}

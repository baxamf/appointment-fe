import { Divider, Flex, Typography, Image } from "antd";
import { GetCompanyServicesForStaffServiceCreateQuery } from "../../../../api/__generated__/graphql";

type StaffServiceParentServiceProps =
  GetCompanyServicesForStaffServiceCreateQuery["getCompanyServices"][0];

export default function StaffServiceParentService({
  title,
  description,
  image,
}: StaffServiceParentServiceProps) {
  return (
    <Flex gap="4vw" style={{ marginBottom: "6vh" }} wrap>
      <div style={{ flex: "1 0 30vw", textAlign: "left" }}>
        <Divider orientation="left">title</Divider>
        <Typography.Title style={{ marginBottom: "4vh" }} level={4}>
          {title}
        </Typography.Title>

        <Divider orientation="left">description</Divider>
        <Typography.Paragraph type="secondary">
          {description}
        </Typography.Paragraph>
      </div>

      <div style={{ flex: "1 0 15vw" }}>
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

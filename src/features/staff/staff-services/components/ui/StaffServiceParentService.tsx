import { Divider, Flex, Typography, Image } from "antd";
import { GetCompanyServicesForStaffServiceCreateQuery } from "../../../../../api/__generated__/graphql";

type StaffServiceParentServiceProps =
  GetCompanyServicesForStaffServiceCreateQuery["getCompanyServices"][0];

export default function StaffServiceParentService({
  title,
  description,
  image,
}: StaffServiceParentServiceProps) {
  return (
    <Flex className="flex-col gap-[2vw]">
      <Typography.Title className="w-full" type="secondary" level={2}>
        Parent Service
      </Typography.Title>

      <Flex className="flex-wrap gap-[4vw]">
        <div className="flex-1 basis-[30vw] text-left">
          <Divider orientation="left">title</Divider>
          <Typography.Title className="mb-4" level={4}>
            {title}
          </Typography.Title>

          <Divider orientation="left">description</Divider>
          <Typography.Paragraph type="secondary">
            {description}
          </Typography.Paragraph>
        </div>

        <div className="flex-1 basis-[15vw]">
          <Divider>image</Divider>
          <Image
            src={image}
            width="100%"
            className="object-cover aspect-[16/10]"
          />
        </div>
      </Flex>
    </Flex>
  );
}

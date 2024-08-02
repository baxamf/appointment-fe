import { Card, Divider, Typography, Image, Flex } from "antd";
import { GetAdminCompanyServicesQuery } from "../../../../api/__generated__/graphql";
import { useNavigateToDetail } from "../../../../common/hooks/useNavigateToDetail";

type AdminServicesListItemProps =
  GetAdminCompanyServicesQuery["getCompanyServices"][0];

export default function AdminServicesListItem({
  id,
  title,
  description,
  image,
}: AdminServicesListItemProps) {
  const { navigateToDetail } = useNavigateToDetail(id);

  return (
    <Card
      hoverable
      onClick={navigateToDetail}
      className="px-[4vw] py-[2vh] w-full text-left hover:shadow-3xl transition"
    >
      <Flex className="flex-wrap gap-x-[4vw] ">
        <div className="flex-grow-[2] basis-[25vw] ">
          <Divider>service title</Divider>
          <Typography.Title className="mb-[2vh]" level={2}>
            {title}
          </Typography.Title>

          <Divider>service description</Divider>
          <Typography.Paragraph type="secondary">
            {description}
          </Typography.Paragraph>
        </div>

        <div className="flex-1 basis-[20vw] relative">
          <Divider>service Image</Divider>
          <Image
            src={image}
            preview={false}
            width="100%"
            className="object-cover aspect-[16/10]"
          />
        </div>
      </Flex>
    </Card>
  );
}

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
      style={{ flex: "1 0 32vw", padding: "2vh 5vw" }}
    >
      <Flex vertical gap="2vh">
        <div style={{ flex: "1 0 17vh" }}>
          <Divider>service title</Divider>
          <Typography.Title level={2}>{title}</Typography.Title>
        </div>

        <div>
          <Divider>service description</Divider>
          <Typography.Paragraph type="secondary">
            {description}
          </Typography.Paragraph>
        </div>

        <div>
          <Divider>service Image</Divider>
          <Image
            src={image}
            preview={false}
            width="100%"
            style={{ objectFit: "cover", aspectRatio: "16/10" }}
          />
        </div>
      </Flex>
    </Card>
  );
}

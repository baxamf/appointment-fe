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
      style={{ padding: "2vh 5vw", textAlign: "left" }}
    >
      <Flex gap="4vw" wrap>
        <div style={{ flex: "2 0 25vw" }}>
          <Divider>service title</Divider>
          <Typography.Title level={2}>{title}</Typography.Title>

          <Divider>service description</Divider>
          <Typography.Paragraph type="secondary">
            {description}
          </Typography.Paragraph>
        </div>

        <div style={{ flex: "1 0 20vw" }}>
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

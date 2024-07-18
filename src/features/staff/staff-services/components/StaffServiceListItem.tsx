import { Card, Divider, Flex, Typography, Image, theme } from "antd";
import { GetMyStaffServicesQuery } from "../../../../api/__generated__/graphql";
import { useNavigateToDetail } from "../../../../common/hooks/useNavigateToDetail";

type StaffServiceListItemProps =
  GetMyStaffServicesQuery["getMyStaffServices"][0];

export default function StaffServiceListItem({
  id,
  title,
  description,
  image,
  price,
  duration,
  service,
}: StaffServiceListItemProps) {
  const { navigateToDetail } = useNavigateToDetail(id);
  const { token } = theme.useToken();

  return (
    <Card
      hoverable
      onClick={navigateToDetail}
      style={{ flex: 1, padding: "2vh 5vw" }}
    >
      <Flex gap="4vw" wrap>
        <div style={{ width: "100%" }}>
          <Divider>main service title</Divider>
          <Typography.Title
            style={{ color: `${token.colorTextSecondary}` }}
            level={4}
          >
            {service.title}
          </Typography.Title>
        </div>

        <Flex gap="4vh" vertical flex="1 0 24vw" wrap>
          <div style={{ flex: "1 0" }}>
            <Divider>title</Divider>
            <Typography.Title level={3}>{title}</Typography.Title>
          </div>

          <div style={{ flex: "1 0" }}>
            <Divider>description</Divider>
            <Typography.Text type="secondary">{description}</Typography.Text>
          </div>
        </Flex>

        <div style={{ flex: "1 0 24vw" }}>
          <Divider>image</Divider>
          {!!image && (
            <Image
              src={image}
              preview={false}
              width="100%"
              style={{ objectFit: "cover", aspectRatio: "16/10" }}
            />
          )}
        </div>

        <Flex gap="4vw" flex="1 1 25vw" wrap>
          <div style={{ flex: "1 0 20vw" }}>
            <Divider>duration</Divider>
            <Typography.Title level={4}>{duration} min</Typography.Title>
          </div>

          <div style={{ flex: "1 0 20vw" }}>
            <Divider>price</Divider>
            <Typography.Title level={4}>${price}</Typography.Title>
          </div>
        </Flex>
      </Flex>
    </Card>
  );
}

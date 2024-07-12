import { Card, Divider, Typography, Image } from "antd";
import { GetAdminCompanyServicesQuery } from "../../../../api/__generated__/graphql";
import { useNavigateToDetail } from "../../../../common/hooks/useNavigateToDetail";

type AdminServicesListItemProps = {
  service: GetAdminCompanyServicesQuery["getCompanyServices"][0];
};

export default function AdminServicesListItem({
  service,
}: AdminServicesListItemProps) {
  const { navigateToDetail } = useNavigateToDetail(service.id);

  return (
    <Card
      hoverable
      onClick={navigateToDetail}
      style={{ flex: "1 0 32vw", padding: "2vh 5vw" }}
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        },
      }}
    >
      <div>
        <Divider>service title</Divider>
        <Typography.Title level={2}>{service.title}</Typography.Title>
      </div>

      <div>
        <Divider>service description</Divider>
        <Typography.Paragraph type="secondary">
          {service.description}
        </Typography.Paragraph>
      </div>

      <div>
        <Divider>service Image</Divider>
        <Image
          src={service.image}
          preview={false}
          width="100%"
          style={{ objectFit: "cover", aspectRatio: "4/3" }}
        />
      </div>
    </Card>
  );
}

import { Card, Divider, Flex, Typography, Image } from "antd";
import { useGetMyStaffService } from "../hooks/useGetMyStaffService";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";

export default function StaffServiceEdit() {
  const { staffService, staffServiceLoading, staffServiceError } =
    useGetMyStaffService();

  if (staffServiceLoading) return <Loading />;

  if (staffServiceError)
    return <ErrorPage message={staffServiceError.message} />;

  if (staffService) {
    const { title, description, image, duration, price, service } =
      staffService;

    return (
      <Card style={{ flex: 1, padding: "2vh 5vw" }}>
        <Flex gap="4vh" vertical wrap>
          <Flex gap="4vh" flex={1} wrap>
            <div style={{ flex: "1 0 25vw" }}>
              <Divider>main title</Divider>
              <Typography.Title level={3}>{service.title}</Typography.Title>
            </div>

            <div style={{ flex: "1 0 25vw" }}>
              <Divider>my custom title</Divider>
              <Typography.Title level={3}>{title}</Typography.Title>
            </div>
          </Flex>

          <Flex gap="4vh" flex={1} wrap>
            <div style={{ flex: "1 0 25vw" }}>
              <Divider>image</Divider>
              <Image
                src={service.image}
                preview={false}
                width="100%"
                style={{ objectFit: "cover", aspectRatio: "16/10" }}
              />
            </div>

            <div style={{ flex: "1 0 25vw" }}>
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
          </Flex>

          <Flex gap="4vh" flex={1} wrap>
            <div style={{ flex: "1 0 25vw" }}>
              <Divider>description</Divider>
              <Typography.Paragraph type="secondary">
                {service.description}
              </Typography.Paragraph>
            </div>

            <div style={{ flex: "1 0 25vw" }}>
              <Divider>description</Divider>
              <Typography.Text type="secondary">{description}</Typography.Text>
            </div>
          </Flex>

          <Flex gap="4vh" flex={1} wrap>
            <div style={{ flex: "1 0 25vw" }}>
              <Divider>service duration</Divider>
              <Typography.Title level={4}>{duration} min</Typography.Title>
            </div>

            <div style={{ flex: "1 0 25vw" }}>
              <Divider>service price</Divider>
              <Typography.Title level={4}>${price}</Typography.Title>
            </div>
          </Flex>
        </Flex>
      </Card>
    );
  }
}

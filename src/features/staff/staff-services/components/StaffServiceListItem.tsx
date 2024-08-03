import { Card, Divider, Flex, Typography, Image } from "antd";
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

  return (
    <Card
      hoverable
      onClick={navigateToDetail}
      className="flex-1 px-[4vw] py-[2vh] text-center hover:shadow-3xl transition"
    >
      <Flex className="flex-wrap gap-[4vw]">
        <div className="basis-full">
          <Divider>main service title</Divider>
          <Typography.Title className="text-secondary" level={4}>
            {service.title}
          </Typography.Title>
        </div>

        <Flex className="flex-col flex-wrap gap-[2vh] flex-1 basis-[24vw] text-left">
          <div>
            <Divider orientation="left">title</Divider>
            <Typography.Title level={3}>{title}</Typography.Title>
          </div>

          <div>
            <Divider orientation="left">description</Divider>
            <Typography.Text type="secondary">{description}</Typography.Text>
          </div>
        </Flex>

        <div className="flex-1 basis-[24vw]">
          <Divider>image</Divider>
          {!!image && (
            <Image
              src={image}
              preview={false}
              width="100%"
              className="object-cover aspect-[16/10]"
            />
          )}
        </div>

        <Flex className="flex-wrap gap-[4vw] flex-1 basis-[24vw]">
          <div className="flex-1 basis-[20vw]">
            <Divider>duration</Divider>
            <Typography.Title level={4}>{duration} min</Typography.Title>
          </div>

          <div className="flex-1 basis-[20vw]">
            <Divider>price</Divider>
            <Typography.Title level={4}>${price}</Typography.Title>
          </div>
        </Flex>
      </Flex>
    </Card>
  );
}

import { Button, Flex, Image, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { GetPublicCompanyServicesQuery } from "../../../../../api/__generated__/graphql";

type AppointmentFormMainServiceScreenProps =
  GetPublicCompanyServicesQuery["getCompanyServices"][0] & {
    onWheel: (event: React.WheelEvent<HTMLDivElement>) => void;
    setMainService: (serviceId: number) => void;
  };

export default function AppointmentFormMainServiceScreen({
  id,
  image,
  title,
  description,
  onWheel,
  setMainService,
}: AppointmentFormMainServiceScreenProps) {
  return (
    <Flex className="gap-[5vw] flex-wrap px-10 py-20" onWheel={onWheel}>
      <div className="flex-grow-[3] basis-[400px]">
        <Image
          src={image}
          preview={false}
          height="60vh"
          width="100%"
          className="object-cover aspect-[16/10]"
        />
      </div>

      <Flex className="flex-col gap-[2vh] flex-grow-[2] basis-[400px] text-left">
        <Typography.Title level={2}>{title}</Typography.Title>

        <Typography.Paragraph type="secondary">
          {description}
        </Typography.Paragraph>

        <Button
          className="w-max mt-auto self-center"
          type="primary"
          icon={<CaretRightOutlined />}
          iconPosition="end"
          onClick={() => setMainService(id)}
        >
          Choose artist
        </Button>
      </Flex>
    </Flex>
  );
}

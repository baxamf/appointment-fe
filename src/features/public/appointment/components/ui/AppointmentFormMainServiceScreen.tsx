import { Button, Flex, Image, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { MainServicesForAppointment } from "../../types";

type AppointmentFormMainServiceScreenProps = MainServicesForAppointment & {
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
    <Flex className="gap-[5vw] px-10 py-20" onWheel={onWheel}>
      <Image
        src={image}
        preview={false}
        height="60vh"
        className="flex-1 object-cover aspect-[16/10]"
      />

      <div className="grid w-2/3 text-left">
        <div className="grid self-center gap-[2vh]">
          <Typography.Title level={2}>{title}</Typography.Title>

          <Typography.Paragraph type="secondary">
            {description}
          </Typography.Paragraph>
        </div>

        <Button
          className="w-max self-end place-self-center"
          type="primary"
          icon={<CaretRightOutlined />}
          iconPosition="end"
          onClick={() => setMainService(id)}
        >
          Choose artist
        </Button>
      </div>
    </Flex>
  );
}

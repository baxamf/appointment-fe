import { Button, Flex, Image, Typography } from "antd";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { GetStaffServicesForAppointmentQuery } from "../../../../../api/__generated__/graphql";

type AppointmentFormArtistScreenProps =
  GetStaffServicesForAppointmentQuery["getStaffServices"][0] & {
    onWheel: (event: React.WheelEvent<HTMLDivElement>) => void;
    resetMainService: () => void;
    setArtist: (staffId: number, staffServiceId: number) => void;
  };

export default function AppointmentFormArtistScreen({
  onWheel,
  resetMainService,
  setArtist,
  user,
  ...service
}: AppointmentFormArtistScreenProps) {
  return (
    <Flex
      className="gap-[5vw] flex-wrap justify-center px-10 py-20"
      onWheel={onWheel}
    >
      <div>
        <Image
          src={user.profile?.avatar || ""}
          height="60vh"
          className="object-cover"
        />
      </div>

      <Flex className="flex-col gap-[2vh] flex-1 basis-[400px] text-left">
        <Typography.Title level={2}>
          {[user.profile?.firstName, user.profile?.lastName].join(" ")}
          {!!user.profile?.nickName && (
            <span className="text-secondary">{` «${user.profile.nickName}»`}</span>
          )}
        </Typography.Title>

        <Typography.Paragraph className="w-[30vw]" type="secondary">
          {service.description}
        </Typography.Paragraph>

        <Flex className="gap-[2vh] flex-wrap items-center text-center">
          <Typography.Title
            type="secondary"
            className="flex-1 basis-full"
            level={4}
          >
            {service.title}
          </Typography.Title>

          <div>
            <Image
              src={service.image || ""}
              height="20vh"
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <Typography.Title level={4}>
              {service.duration + "min"}
            </Typography.Title>
          </div>

          <div className="flex-1">
            <Typography.Title level={4}>{"$" + service.price}</Typography.Title>
          </div>
        </Flex>

        <Flex className="gap-[2vw] justify-center mt-auto">
          <Button
            type="text"
            icon={<CaretLeftOutlined />}
            iconPosition="start"
            onClick={resetMainService}
          >
            Choose other service
          </Button>

          <Button
            type="primary"
            icon={<CaretRightOutlined />}
            iconPosition="end"
            onClick={() => setArtist(user.id, service.id)}
          >
            Select time
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

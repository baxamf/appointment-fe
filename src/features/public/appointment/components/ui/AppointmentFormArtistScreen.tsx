import { Button, Flex, Image, Typography } from "antd";
import { ClockCircleFilled } from "@ant-design/icons";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { GetStaffServicesForAppointmentQuery } from "../../../../../api/__generated__/graphql";
import WorkingDaysList from "./WorkingDaysList";

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
    <Flex className="gap-[5vw] px-10 py-20" onWheel={onWheel}>
      <Image
        src={user.profile?.avatar || ""}
        height="60vh"
        className="flex-1 object-cover aspect-[10/16]"
      />

      <Flex className="flex-col gap-[2vh] basis-2/3 text-left">
        <Typography.Title level={2}>
          {[user.profile?.firstName, user.profile?.lastName].join(" ")}
          {!!user.profile?.nickName && (
            <span className="text-secondary">{` «${user.profile.nickName}»`}</span>
          )}
        </Typography.Title>

        <Typography.Paragraph className="w-2/3" type="secondary">
          {service.description}
        </Typography.Paragraph>

        <Flex className="gap-[2vw] flex-wrap">
          <div>
            <Image
              src={service.image || ""}
              height="25vh"
              className="object-cover"
            />
          </div>

          <div className="grid gap-[1vh] content-start">
            <Typography.Title className="text-secondary" level={4}>
              {service.title}
            </Typography.Title>

            <Typography.Title level={4}>
              <ClockCircleFilled className="mr-1" />
              {[service.duration + "min", "$" + service.price].join(" - ")}
            </Typography.Title>

            {user?.workingDays?.length && (
              <WorkingDaysList {...{ workingDays: user.workingDays }} />
            )}
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

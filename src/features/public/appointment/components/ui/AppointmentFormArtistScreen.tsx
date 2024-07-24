import { Button, Flex, Image, theme, Typography } from "antd";
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
  const { token } = theme.useToken();

  return (
    <Flex
      gap="4vw"
      style={{
        padding: "6vh 4vw",
      }}
      wrap
      onWheel={onWheel}
    >
      <div>
        <Image
          src={user.profile?.avatar || ""}
          height="60vh"
          style={{ objectFit: "cover" }}
        />
      </div>

      <Flex
        vertical
        gap="2vh"
        style={{
          flex: "0 0 40vw",
          textAlign: "left",
          alignSelf: "stretch",
        }}
      >
        <Typography.Title level={2}>
          {[user.profile?.firstName, user.profile?.lastName].join(" ")}
          {!!user.profile?.nickName && (
            <span
              style={{
                color: token.colorTextSecondary,
              }}
            >{` «${user.profile.nickName}»`}</span>
          )}
        </Typography.Title>

        <Typography.Paragraph type="secondary">
          {service.description}
        </Typography.Paragraph>

        <Flex
          gap="2vh"
          style={{
            flex: "1 0",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography.Title
            type="secondary"
            style={{
              flex: "1 0 100%",
            }}
            level={4}
          >
            {service.title}
          </Typography.Title>

          <div>
            <Image
              src={service.image || ""}
              height="20vh"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              flex: "1",
            }}
          >
            <Typography.Title level={4}>
              {service.duration + "min"}
            </Typography.Title>
          </div>

          <div
            style={{
              flex: "1",
            }}
          >
            <Typography.Title level={4}>{"$" + service.price}</Typography.Title>
          </div>
        </Flex>

        <Flex gap="2vw" justify="center">
          <Button
            type="text"
            icon={<CaretLeftOutlined />}
            iconPosition="start"
            style={{
              width: "max-content",
            }}
            onClick={resetMainService}
          >
            Choose other service
          </Button>

          <Button
            type="primary"
            icon={<CaretRightOutlined />}
            iconPosition="end"
            style={{ maxWidth: "max-content" }}
            onClick={() => setArtist(user.id, service.id)}
          >
            Select time
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { Card, Flex, Typography, Image, Button, theme } from "antd";
import { PhoneFilled, ClockCircleFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import { GetMyStaffAppointmentsQuery } from "../../../../../api/__generated__/graphql";

type StaffAppointmentCardProps =
  GetMyStaffAppointmentsQuery["getMyAppointments"][0];

export default function StaffAppointmentCard({
  staffService,
  customer,
  ...appointment
}: StaffAppointmentCardProps) {
  const { token } = theme.useToken();
  return (
    <Card style={{ padding: "2vh 2vw" }} key={appointment.id}>
      <Flex gap="3vw" wrap align="center">
        <Flex
          vertical
          style={{ textAlign: "left", flex: "1 0 20vw", gap: "1vh" }}
        >
          <Typography.Title level={4}>
            {appointment.status}

            <span style={{ color: token.colorPrimary }}>
              <ClockCircleFilled style={{ marginInline: "20px 5px" }} />
              {dayjs(appointment.targetTime).format("DD MMMM - HH:mm")}
            </span>
          </Typography.Title>

          <Typography.Title
            level={5}
            style={{
              color: token.colorTextSecondary,
            }}
          >
            {staffService.title}
          </Typography.Title>

          <Typography.Paragraph style={{ margin: 0 }}>
            {[customer.profile?.firstName, customer.profile?.lastName].join(
              " "
            )}
            <PhoneFilled style={{ marginInline: "10px 5px" }} />
            {customer.profile?.phone}
          </Typography.Paragraph>

          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {appointment.description}
          </Typography.Paragraph>
        </Flex>

        <Flex gap="2vw" wrap style={{ flex: "1 0 25vw" }}>
          {appointment.images?.map((image) => (
            <Image
              src={image}
              height="15vh"
              style={{ objectFit: "cover", aspectRatio: "3/4" }}
            />
          ))}
        </Flex>

        <Button type="dashed" color="primary">
          Cancel
        </Button>
      </Flex>
    </Card>
  );
}

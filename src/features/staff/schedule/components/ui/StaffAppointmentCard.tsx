import { Card, Flex, Typography, Image, Button } from "antd";
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
  return (
    <Card className="px-[2vw] py-[2vh]" key={appointment.id}>
      <Flex className="flex-wrap gap-[3vw] items-center">
        <Flex className="flex-col flex-1, gap-[1vh] basis-[20vw] text-left">
          <Typography.Title level={4}>
            {appointment.status}

            <span className="text-primary">
              <ClockCircleFilled className="ml-5 mr-1" />
              {dayjs(appointment.targetTime).format("DD MMMM - HH:mm")}
            </span>
          </Typography.Title>

          <Typography.Title className="text-secondary" level={5}>
            {staffService.title}
          </Typography.Title>

          <Typography.Paragraph>
            {[customer.profile?.firstName, customer.profile?.lastName].join(
              " "
            )}
            <PhoneFilled className="ml-5 mr-1" />
            {customer.profile?.phone}
          </Typography.Paragraph>

          <Typography.Text type="secondary">
            {appointment.description}
          </Typography.Text>
        </Flex>

        <Flex className="flex-wrap gap-[2vw] flex-1 basis-[25vw]">
          {appointment.images?.map((image) => (
            <Image
              src={image}
              height="15vh"
              className="object-cover aspect-[3/4]"
            />
          ))}
        </Flex>

        <Button type="dashed" danger>
          Cancel
        </Button>
      </Flex>
    </Card>
  );
}

import { Button, Card, Divider, Flex, Typography } from "antd";
import { PhoneFilled, ClockCircleFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import { GetAllAppointmentsQuery } from "../../../../../api/__generated__/graphql";

type AdminAppointmentCardProps =
  GetAllAppointmentsQuery["getAllAppointments"][0];

export default function AdminAppointmentCard({
  customer,
  staff,
  staffService,
  ...appointment
}: AdminAppointmentCardProps) {
  return (
    <Card className="px-[2vw] py-[2vh]">
      <Flex className="flex-col flex-wrap gap-[1vh] text-left">
        <Typography.Title level={4}>
          {appointment.status}

          <span className="text-primary whitespace-nowrap">
            <ClockCircleFilled className="ml-5 mr-1" />
            {dayjs(appointment.targetTime).format("DD MMMM - HH:mm")}
          </span>
        </Typography.Title>

        <Typography.Title className="text-secondary" level={5}>
          {staffService.service.title}
        </Typography.Title>

        <Flex className="flex-wrap gap-[2vw] my-[2vh] text-center">
          <div className="flex-1 basis-[max-content]">
            <Divider>staff</Divider>
            <Typography.Title type="secondary" level={5}>
              {[staff.profile?.firstName, staff.profile?.lastName].join(" ")}
              <div>
                <PhoneFilled className="mr-1" />
                {staff.profile?.phone}
              </div>
            </Typography.Title>
          </div>

          <div className="flex-1 basis-[max-content]">
            <Divider>customer</Divider>
            <Typography.Title type="secondary" level={5}>
              {[customer.profile?.firstName, customer.profile?.lastName].join(
                " "
              )}
              <div>
                <PhoneFilled className="mr-1" />
                {customer.profile?.phone}
              </div>
            </Typography.Title>
          </div>
        </Flex>

        <Button className="self-start" type="dashed" danger>
          Cancel
        </Button>
      </Flex>
    </Card>
  );
}

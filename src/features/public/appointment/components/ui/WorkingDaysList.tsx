import { Typography } from "antd";
import dayjs from "dayjs";
import { DAYS } from "../../../../../common/constants/days";
import { StaffWorkingDaysForAppointment } from "../../types";

type WorkingDaysListProps = {
  workingDays: StaffWorkingDaysForAppointment;
};

export default function WorkingDaysList({ workingDays }: WorkingDaysListProps) {
  if (workingDays?.length)
    return workingDays?.map((day) => (
      <div key={day.id} className="flex w-64 justify-between font-bold">
        <Typography.Title type="secondary" level={5}>
          {DAYS[day.day]}
        </Typography.Title>

        <Typography.Text type="secondary">
          {dayjs().hour(day.startHour).minute(day.startMinute).format("HH:mm") +
            " - " +
            dayjs().hour(day.endHour).minute(day.endMinute).format("HH:mm")}
        </Typography.Text>
      </div>
    ));
}

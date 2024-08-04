import { Typography } from "antd";
import dayjs from "dayjs";
import { UserWorkingDay } from "../../../../../api/__generated__/graphql";
import { DAYS } from "../../../../../common/constants/days";

type WorkingDaysListProps = {
  workingDays: Omit<UserWorkingDay, "userId">[];
};

export default function WorkingDaysList({ workingDays }: WorkingDaysListProps) {
  return workingDays?.map((day) => (
    <div className="flex w-64 justify-between font-bold">
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

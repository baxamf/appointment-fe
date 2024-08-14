import { Calendar } from "antd";
import dayjs from "dayjs";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import { useGetMySchedule } from "../hooks/useGetMySchedule";

export default function StaffSchedule() {
  const { workingDays, schedule, loading, errorMessage } = useGetMySchedule();

  if (loading) return <Loading />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (schedule)
    return (
      <Calendar
        disabledDate={(day) => !workingDays?.includes(day.get("day"))}
        cellRender={(current) => {
          const currentDay = current.get("day");
          const workingDay = schedule?.find(({ day }) => day == currentDay);

          if (workingDay)
            return (
              <div className="h-2/3 grid place-items-center font-bold text-secondary">
                {dayjs()
                  .hour(workingDay.startHour)
                  .minute(workingDay.startMinute)
                  .format("HH:mm") +
                  " - " +
                  dayjs()
                    .hour(workingDay.endHour)
                    .minute(workingDay.endMinute)
                    .format("HH:mm")}
              </div>
            );
        }}
      />
    );
}

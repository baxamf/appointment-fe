import { Card } from "antd";
import dayjs from "dayjs";
import { AppointmentAvailableTargetTimes } from "../../types";

type AppointmentFormTargetTimesList = {
  targetTimes?: AppointmentAvailableTargetTimes;
  timeOption: Date | null;
  setTimeOption: (time: Date) => void;
};

export default function AppointmentFormTargetTimesList({
  targetTimes,
  timeOption,
  setTimeOption,
}: AppointmentFormTargetTimesList) {
  if (targetTimes)
    return (
      <div className="grid items-center gap-2 grid-cols-2">
        {targetTimes.map(({ targetTime }) => (
          <Card
            key={targetTime}
            hoverable
            className={`${
              timeOption === targetTime ? "bg-secondary" : ""
            } basis-1/3 font-bold transition`}
            onClick={() => setTimeOption(targetTime)}
          >
            {dayjs(targetTime).format("HH:mm")}
          </Card>
        ))}
      </div>
    );
}

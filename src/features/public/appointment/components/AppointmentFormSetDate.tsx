import { Alert, Button, DatePicker, Flex } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import FormErrorMessage from "../../../../common/components/errors/FormErrorMessage";
import { useGetAppointmentAvailableTimes } from "../hooks/useGetAppointmentAvailableTimes";
import { useAppointmentFormControls } from "../hooks/useAppointmentFormControls";
import AppointmentFormTargetTimesList from "./ui/AppointmentFormTargetTimesList";
import { useState } from "react";
import PageTransition from "../../../../common/components/transitions/PageTransition";

export default function AppointmentFormSetDate() {
  const { resetArtist, setTargetTime, staffWorkingDays } =
    useAppointmentFormControls();
  const { getTargetTimes, targetTimes, loading, errorMessage } =
    useGetAppointmentAvailableTimes();
  const [timeOption, setTimeOption] = useState<Date | null>(null);

  return (
    <div className="h-[60vh] grid gap-10">
      <PageTransition />

      <div className="relative">
        <DatePicker
          allowClear={false}
          className="w-full py-2.5"
          minDate={dayjs()}
          disabled={loading}
          disabledDate={(day) => !staffWorkingDays.includes(day.get("day"))}
          onChange={(date) => {
            setTimeOption(null);
            getTargetTimes(date);
          }}
        />
        <FormErrorMessage name="createAppointmentInput.targetTime" />
        {errorMessage && (
          <Alert
            className="absolute right-0 mt-1"
            message={errorMessage}
            type="error"
          />
        )}
      </div>

      <AppointmentFormTargetTimesList
        {...{ targetTimes, timeOption, setTimeOption }}
      />

      <Flex className="gap-[2vw] self-end">
        <Button
          type="text"
          icon={<CaretLeftOutlined />}
          iconPosition="start"
          className="w-max"
          onClick={resetArtist}
        >
          Choose another artist
        </Button>

        <Button
          type="primary"
          icon={<CaretRightOutlined />}
          iconPosition="end"
          disabled={!timeOption}
          onClick={() => setTargetTime(timeOption)}
        >
          Enter your contact info
        </Button>
      </Flex>
    </div>
  );
}

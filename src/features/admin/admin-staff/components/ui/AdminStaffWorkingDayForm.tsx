import { Button, Flex, Form, Select, TimePicker } from "antd";
import dayjs from "dayjs";
import { workingDays } from "../../utils/constants/working-days";
import { FormikContextType } from "formik";
import {
  CreateUserWorkingDayInput,
  UpdateUserWorkingDayInput,
} from "../../../../../api/__generated__/graphql";

export default function AdminStaffWorkingDayForm<
  T extends CreateUserWorkingDayInput | UpdateUserWorkingDayInput
>(formik: FormikContextType<T>) {
  const {
    values: { startHour, endHour, startMinute, endMinute, day },
  } = formik;

  return (
    <Form
      name="basic"
      initialValues={formik.initialValues}
      onSubmitCapture={formik.handleSubmit}
    >
      <Flex className="flex flex-wrap gap-x-[2vw] gap-y-[4vh]">
        <Select
          className="basis-[250px] h-auto"
          size="large"
          value={day}
          placeholder="Select day"
          options={workingDays}
          onChange={(day) => formik.setFieldValue("day", day)}
        />

        <TimePicker.RangePicker
          className="basis-[250px] h-auto"
          size="large"
          value={[
            dayjs().set("hour", startHour).set("minute", startMinute),
            dayjs().set("hour", endHour).set("minute", endMinute),
          ]}
          onChange={(dates) => {
            formik.setFieldValue(
              "startHour",
              dates?.length && dates[0]?.hour()
            );
            formik.setFieldValue(
              "startMinute",
              dates?.length && dates[0]?.minute()
            );
            formik.setFieldValue("endHour", dates?.length && dates[1]?.hour());
            formik.setFieldValue(
              "endMinute",
              dates?.length && dates[1]?.minute()
            );
          }}
          needConfirm={false}
          showSecond={false}
          minuteStep={30}
        />

        <Button
          type="primary"
          htmlType="submit"
          disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
        >
          Add working day
        </Button>
      </Flex>
    </Form>
  );
}

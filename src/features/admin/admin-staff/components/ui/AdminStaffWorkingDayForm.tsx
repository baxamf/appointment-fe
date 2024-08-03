import { Button, Form, Select, TimePicker } from "antd";
import { CloseSquareFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import { workingDays } from "../../utils/constants/working-days";
import { FormikContextType } from "formik";
import {
  CreateUserWorkingDayInput,
  UpdateUserWorkingDayInput,
} from "../../../../../api/__generated__/graphql";

type AdminStaffWorkingDayFormProps<T> = {
  formik: FormikContextType<T>;
  remove?: () => void;
};

export default function AdminStaffWorkingDayForm<
  T extends CreateUserWorkingDayInput | UpdateUserWorkingDayInput
>({ formik, remove }: AdminStaffWorkingDayFormProps<T>) {
  const {
    values: { startHour, endHour, startMinute, endMinute, day },
  } = formik;

  return (
    <Form
      name="basic"
      initialValues={formik.initialValues}
      onSubmitCapture={formik.handleSubmit}
      className="flex flex-wrap gap-x-[2vw] gap-y-[1vh]"
    >
      <Select
        className="basis-[175px] h-auto"
        size="large"
        value={day}
        placeholder="Select day"
        options={workingDays}
        onChange={(day) => formik.setFieldValue("day", day)}
      />

      <TimePicker.RangePicker
        allowClear={false}
        name="time"
        className="basis-[250px] h-auto"
        size="large"
        value={[
          dayjs().set("hour", startHour).set("minute", startMinute),
          dayjs().set("hour", endHour).set("minute", endMinute),
        ]}
        onChange={(dates) => {
          formik.setFieldValue("startHour", dates?.length && dates[0]?.hour());
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
        ghost
        htmlType="submit"
        disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
      >
        {remove ? "Update working day" : "Add working day"}
      </Button>

      {remove && (
        <Button
          className="px-6"
          icon={<CloseSquareFilled />}
          onClick={remove}
          type="text"
          danger
        ></Button>
      )}
    </Form>
  );
}

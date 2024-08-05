import { useFormik } from "formik";
import {
  GetStaffWorkingDaysQuery,
  UpdateUserWorkingDayInput,
} from "../../../../api/__generated__/graphql";

import ErrorPage from "../../../../common/pages/Error";
import AdminStaffWorkingDayForm from "./ui/AdminStaffWorkingDayForm";
import { useMutateStaffWorkingDay } from "../hooks/useMutateStaffWorkingDay";

type AdminStaffWorkingDaysUpdateProps =
  GetStaffWorkingDaysQuery["getUserWorkingDays"][0];

export default function AdminStaffWorkingDaysUpdate({
  id,
  day,
  startHour,
  startMinute,
  endHour,
  endMinute,
}: AdminStaffWorkingDaysUpdateProps) {
  const { updateWorkingDay, removeWorkingDay, errorMessage } =
    useMutateStaffWorkingDay();

  const formik = useFormik<UpdateUserWorkingDayInput>({
    initialValues: {
      day,
      startHour,
      startMinute,
      endHour,
      endMinute,
    },
    enableReinitialize: true,
    onSubmit: (values) => updateWorkingDay(id, values),
  });

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  return (
    <AdminStaffWorkingDayForm
      {...{ formik, remove: () => removeWorkingDay(id) }}
    />
  );
}

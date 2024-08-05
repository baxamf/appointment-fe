import { useFormik } from "formik";
import { CreateUserWorkingDayInput } from "../../../../api/__generated__/graphql";
import { useAddStaffWorkingDay } from "../hooks/useAddStaffWorkingDay";
import { useParams } from "react-router-dom";
import ErrorPage from "../../../../common/pages/Error";
import AdminStaffWorkingDayForm from "./ui/AdminStaffWorkingDayForm";

export default function AdminStaffWorkingDaysAdd() {
  const { staffId } = useParams();

  const { addWorkingDay, errorMessage } = useAddStaffWorkingDay();

  const formik = useFormik<CreateUserWorkingDayInput>({
    initialValues: {
      userId: Number(staffId),
      day: 1,
      startHour: 0,
      startMinute: 0,
      endHour: 0,
      endMinute: 0,
    },
    onSubmit: addWorkingDay,
  });

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  return <AdminStaffWorkingDayForm {...{ formik }} />;
}

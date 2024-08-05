import { Card, Divider, Flex, Typography } from "antd";
import AdminStaffWorkingDaysAdd from "./AdminStaffWorkingDaysAdd";
import { useGetStaffWorkingDays } from "../hooks/useGetStaffWorkingDays";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import AdminStaffWorkingDaysUpdate from "./AdminStaffWorkingDaysUpdate";

export default function AdminStaffWorkingDays() {
  const { workingDays, workingDaysLoading, workingDaysErrorMessage } =
    useGetStaffWorkingDays();

  if (workingDaysLoading) return <Loading />;

  if (workingDaysErrorMessage)
    return <ErrorPage message={workingDaysErrorMessage} />;

  if (workingDays)
    return (
      <Card className="w-full px-[4vw] py-[2vh]">
        <Typography.Title type="secondary" className="mb-[4vh]" level={2}>
          Working days
        </Typography.Title>

        <AdminStaffWorkingDaysAdd />

        <Divider />
        <Flex className="flex-col flex-wrap gap-[2vh]">
          {workingDays.map((workingDay) => (
            <AdminStaffWorkingDaysUpdate key={workingDay.id} {...workingDay} />
          ))}
        </Flex>
      </Card>
    );
}

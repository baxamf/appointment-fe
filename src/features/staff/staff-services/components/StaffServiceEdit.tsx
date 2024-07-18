import { Card, Typography } from "antd";
import { useGetMyStaffService } from "../hooks/useGetMyStaffService";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import StaffServiceEditForm from "./StaffServiceEditForm";
import StaffServiceEditParentService from "./StaffServiceEditParentService";

export default function StaffServiceEdit() {
  const { staffService, staffServiceLoading, staffServiceError } =
    useGetMyStaffService();

  if (staffServiceLoading) return <Loading />;

  if (staffServiceError)
    return <ErrorPage message={staffServiceError.message} />;

  if (staffService) {
    const { service, ...staffServiceData } = staffService;

    return (
      <>
        <Card style={{ flex: "1 1 35vw", padding: "2vh 5vw" }}>
          <Typography.Title style={{ marginBottom: "4vh" }} level={2}>
            Details
          </Typography.Title>

          <StaffServiceEditForm {...staffServiceData} />
        </Card>

        <Card style={{ flex: "1 0 30vw", padding: "2vh 5vw" }}>
          <Typography.Title style={{ marginBottom: "4vh" }} level={2}>
            Parent Service
          </Typography.Title>

          <StaffServiceEditParentService {...service} />
        </Card>
      </>
    );
  }
}

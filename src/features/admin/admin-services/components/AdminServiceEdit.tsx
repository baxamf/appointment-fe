import { Card, Flex, Typography } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import { useGetAdminCompanyService } from "../hooks/useGetAdminCompanyService";
import AdminServiceEditForm from "./AdminServiceEditForm";
import AdminServiceEditTags from "./AdminServiceEditTags";
import ErrorPage from "../../../../pages/Error";

export default function AdminServiceEdit() {
  const { adminService, adminServiceError, adminServiceLoading } =
    useGetAdminCompanyService();

  if (adminServiceLoading) return <Loading />;

  if (adminServiceError)
    return <ErrorPage message={adminServiceError.message} />;

  if (adminService)
    return (
      <Flex gap="4vh" wrap>
        <Card style={{ padding: "2vh 5vw" }}>
          <Typography.Title
            type="secondary"
            style={{ marginBottom: "2vh" }}
            level={2}
          >
            Details
          </Typography.Title>

          <AdminServiceEditForm {...adminService} />
        </Card>

        <Card style={{ flex: "1 1 15vw", padding: "2vh 5vw" }}>
          <Typography.Title
            type="secondary"
            style={{ marginBottom: "2vh" }}
            level={2}
          >
            Tags
          </Typography.Title>

          <AdminServiceEditTags />
        </Card>
      </Flex>
    );
}

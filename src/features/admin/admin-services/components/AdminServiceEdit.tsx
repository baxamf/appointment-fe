import { Card, Flex, Typography } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import { useGetAdminCompanyService } from "../hooks/useGetAdminCompanyService";
import AdminServiceEditForm from "./AdminServiceEditForm";
import AdminServiceEditTags from "./AdminServiceEditTags";

export default function AdminServiceEdit() {
  const { adminService, adminServiceError, adminServiceLoading } =
    useGetAdminCompanyService();

  if (adminServiceLoading) return <Loading />;

  if (adminServiceError) return <h1>{adminServiceError.message}</h1>;

  return (
    <Flex gap="2vw" wrap align="flex-start">
      <Card
        style={{ flex: "2 0 35vw", padding: "2vh 5vw" }}
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
          },
        }}
      >
        <Typography.Title level={2}>Details</Typography.Title>

        <AdminServiceEditForm {...adminService} />
      </Card>

      <Card
        style={{ flex: "1 1 15vw", padding: "2vh 5vw" }}
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "2vh",
          },
        }}
      >
        <Typography.Title style={{ alignSelf: "center" }} level={2}>
          Tags
        </Typography.Title>

        <AdminServiceEditTags />
      </Card>
    </Flex>
  );
}

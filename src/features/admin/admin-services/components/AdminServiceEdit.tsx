import { Card, Flex } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import { useGetAdminCompanyService } from "../hooks/useGetAdminCompanyService";
import AdminServiceEditForm from "./AdminServiceEditForm";
import AdminServiceEditTags from "./AdminServiceEditTags";
import ErrorPage from "../../../../common/pages/Error";

export default function AdminServiceEdit() {
  const { adminService, adminServiceError, adminServiceLoading } =
    useGetAdminCompanyService();

  if (adminServiceLoading) return <Loading />;

  if (adminServiceError)
    return <ErrorPage message={adminServiceError.message} />;

  if (adminService)
    return (
      <Flex className="flex-wrap gap-[4vh]">
        <Card className="px-[4vw] py-[2vh] flex-1 basis-full">
          <AdminServiceEditForm {...adminService} />
        </Card>

        <Card className="px-[4vw] py-[2vh] flex-1 ">
          <AdminServiceEditTags />
        </Card>
      </Flex>
    );
}

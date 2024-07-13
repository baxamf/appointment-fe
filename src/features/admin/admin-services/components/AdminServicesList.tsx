import { Flex } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { useGetAdminCompanyServices } from "../hooks/useGetAdminCompanyServices";
import AdminServicesListItem from "./AdminServicesListItem";

export default function AdminServicesList() {
  const { adminServices, adminServicesError, adminServicesLoading } =
    useGetAdminCompanyServices();

  if (adminServicesLoading) return <Loading />;

  if (adminServicesError) return <ErrorPage />;

  return (
    <Flex gap="2vw" wrap>
      {adminServices?.map((service) => (
        <AdminServicesListItem key={service.id} service={service} />
      ))}
    </Flex>
  );
}

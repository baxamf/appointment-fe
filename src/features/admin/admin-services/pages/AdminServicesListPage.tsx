import { Flex } from "antd";
import { useGetAdminCompanyServices } from "../hooks/useGetAdminCompanyServices";
import Loading from "../../../../common/components/loading/Loading";
import AdminServicesListItem from "../components/AdminServicesListItem";

export default function AdminServicesListPage() {
  const { adminServices, adminServicesError, adminServicesLoading } =
    useGetAdminCompanyServices();

  if (adminServicesLoading) return <Loading />;

  return (
    <Flex gap="2vw" wrap style={{ marginLeft: "2vw" }}>
      {adminServicesError && <h1>{adminServicesError.message}</h1>}

      {adminServices?.map((service) => (
        <AdminServicesListItem key={service.id} service={service} />
      ))}
    </Flex>
  );
}

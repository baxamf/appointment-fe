import { Flex } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { useGetAdminCompanyServices } from "../hooks/useGetAdminCompanyServices";
import AdminServicesListItem from "./AdminServicesListItem";
import AddAdminServiceCard from "./ui/AddAdminServiceCard";

export default function AdminServicesList() {
  const { adminServices, adminServicesError, adminServicesLoading } =
    useGetAdminCompanyServices();

  if (adminServicesLoading) return <Loading />;

  if (adminServicesError)
    return <ErrorPage message={adminServicesError.message} />;

  if (adminServices)
    return (
      <Flex className="flex-wrap gap-[4vh]">
        {adminServices?.map((service) => (
          <AdminServicesListItem key={service.id} {...service} />
        ))}

        <AddAdminServiceCard />
      </Flex>
    );
}

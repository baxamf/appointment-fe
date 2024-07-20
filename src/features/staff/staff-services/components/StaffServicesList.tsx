import { Flex } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { useGetMyStaffServices } from "../hooks/useGetMyStaffServices";
import StaffServiceListItem from "./StaffServiceListItem";
import AddStaffServiceCard from "./ui/AddStaffServiceCard";

export default function StaffServicesList() {
  const { staffServices, staffServicesLoading, staffServicesError } =
    useGetMyStaffServices();

  if (staffServicesLoading) return <Loading />;

  if (staffServicesError)
    return <ErrorPage message={staffServicesError.message} />;

  if (staffServices)
    return (
      <Flex gap="6vw" vertical wrap>
        {staffServices.map((service) => (
          <StaffServiceListItem key={service.id} {...service} />
        ))}

        <AddStaffServiceCard />
      </Flex>
    );
}

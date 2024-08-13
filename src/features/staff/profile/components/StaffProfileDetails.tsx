import { Card } from "antd";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import { useGetMyProfile } from "../hooks/useGetMyProfile";
import StaffProfileForm from "./StaffProfileForm";

export default function StaffProfileDetails() {
  const { profile, loading, errorMessage } = useGetMyProfile();

  if (loading) return <Loading />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (profile)
    return (
      <Card className="px-[4vw] py-[4vh]">
        <StaffProfileForm {...profile} />
      </Card>
    );
}

import { Typography } from "antd";
import { useGetHomeCompanyServices } from "../hooks/useGetHomeCompanyServices";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import HomeServiceScreen from "./ui/HomeServiceScreen";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";

export default function HomeServices() {
  const { services, loading, errorMessage } = useGetHomeCompanyServices();
  const navigate = useNavigate();

  if (loading) return <Loading />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (services)
    return (
      <div className="min-h-screen grid">
        <Typography.Title
          type="secondary"
          className="mb-[10vh] uppercase text-secondary"
          level={2}
        >
          Services
        </Typography.Title>

        {services.map((service) => (
          <HomeServiceScreen
            key={service.id}
            {...{
              service,
              toService: () => navigate(`${RoutePaths.SERVICES + service.id}`),
            }}
          />
        ))}
      </div>
    );
}

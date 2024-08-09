import { Typography, Image } from "antd";
import PageTransition from "../../../../common/components/transitions/PageTransition";
import ErrorPage from "../../../../common/pages/Error";
import { useGetServicesPageCompanyServices } from "../hooks/useGetServicesPageCompanyServices";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";

export default function ServicesPage() {
  const { services, loading, errorMessage } =
    useGetServicesPageCompanyServices();

  const navigate = useNavigate();

  if (loading) return <PageTransition />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (services)
    return (
      <div className="grid gap-[33vh] py-[10vh] text-left">
        <PageTransition />
        {services.map((service) => (
          <div key={service.id} className="grid gap-[5vh]">
            <Typography.Title>{service.title}</Typography.Title>

            <div className="grid grid-cols-2 gap-[5vw]">
              <Image
                onClick={() => navigate(`${RoutePaths.SERVICES + service.id}`)}
                src={service.image}
                preview={false}
                height="100%"
                className="object-cover cursor-pointer min-h-[100vh]"
              />

              <Typography.Text className="text-2xl" type="secondary">
                {service.description}
              </Typography.Text>
            </div>

            <div className="flex flex-wrap gap-[2vw]">
              <Typography.Title
                type="secondary"
                className="basis-full"
                level={2}
              >
                Artists
              </Typography.Title>
              {service.staffServices?.map((staff) => (
                <div key={staff.id} className="grid gap-[1vh]">
                  <Image
                    onClick={() =>
                      navigate(`${RoutePaths.SERVICES + staff.userId}`)
                    }
                    src={staff.user.profile?.avatar || ""}
                    preview={false}
                    height="50vh"
                    className="object-cover cursor-pointer"
                  />

                  <Typography.Title className="w-max" level={3}>
                    {!!staff.user.profile &&
                      [
                        staff.user.profile.firstName,
                        staff.user.profile.lastName,
                      ].join(" ")}
                    {!!staff.user.profile?.nickName && (
                      <div className="text-secondary">{` «${staff.user.profile.nickName}»`}</div>
                    )}
                  </Typography.Title>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
}

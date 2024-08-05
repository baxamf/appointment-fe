import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import { useGetPublicCompanyServices } from "../../common/hooks/useGetPublicCompanyServices";
import { Carousel } from "antd";
import { useCarousel } from "../../common/hooks/useCarousel";
import { useAppointmentFormControls } from "../hooks/useAppointmentFormControls";
import AppointmentFormMainServiceScreen from "./ui/AppointmentFormMainServiceScreen";

export default function AppointmentFormSetMainService() {
  const { companyServices, errorMessage, loading } =
    useGetPublicCompanyServices();

  const { carouselRef, onWheel } = useCarousel();

  const { setMainService } = useAppointmentFormControls();

  if (loading) return <Loading />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (companyServices)
    return (
      <Carousel
        ref={carouselRef}
        arrows={companyServices.length > 1}
        dots={companyServices.length > 1}
        dotPosition="left"
        effect="fade"
        infinite
        draggable
        waitForAnimate
      >
        {companyServices.map((service) => (
          <div key={service.id}>
            <AppointmentFormMainServiceScreen
              {...{ ...service, setMainService, onWheel }}
            />
          </div>
        ))}
      </Carousel>
    );
}

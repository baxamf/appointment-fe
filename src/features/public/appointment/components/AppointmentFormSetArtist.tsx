import { useGetStaffServiceForAppointment } from "../hooks/useGetStaffServicesForAppointment";
import ErrorPage from "../../../../common/pages/Error";
import { Carousel } from "antd";
import { useCarousel } from "../../common/hooks/useCarousel";
import { useAppointmentFormControls } from "../hooks/useAppointmentFormControls";
import AppointmentFormArtistScreen from "./ui/AppointmentFormArtistScreen";
import PageTransition from "../../../../common/components/transitions/PageTransition";

export default function AppointmentFormSetArtist() {
  const { setArtist, resetMainService } = useAppointmentFormControls();

  const { carouselRef, onWheel } = useCarousel();

  const { staffServices, loading, errorMessage } =
    useGetStaffServiceForAppointment();

  if (loading) return <PageTransition />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (staffServices)
    return (
      <>
        <PageTransition />

        <Carousel
          ref={carouselRef}
          arrows={staffServices.length > 1}
          dots={staffServices.length > 1}
          dotPosition="left"
          effect="fade"
          infinite
          draggable
          waitForAnimate
        >
          {staffServices.map((staffServices) => (
            <div key={staffServices.id}>
              <AppointmentFormArtistScreen
                {...{ ...staffServices, onWheel, setArtist, resetMainService }}
              />
            </div>
          ))}
        </Carousel>
      </>
    );
}

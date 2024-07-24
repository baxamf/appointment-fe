import { useGetStaffServiceForAppointment } from "../hooks/useGetStaffServicesForAppointment";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { Carousel, Flex } from "antd";
import { useCarousel } from "../../common/hooks/useCarousel";
import { useAppointmentFormControls } from "../hooks/useAppointmentFormControls";
import AppointmentFormArtistScreen from "./ui/AppointmentFormArtistScreen";

export default function AppointmentFormSetArtist() {
  const { setArtist, resetMainService } = useAppointmentFormControls();

  const { carouselRef, onWheel } = useCarousel();

  const { staffServices, loading, errorMessage } =
    useGetStaffServiceForAppointment();

  if (loading) return <Loading />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (staffServices)
    return (
      <Flex gap="4vh">
        <Carousel
          ref={carouselRef}
          arrows
          vertical
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
      </Flex>
    );
}

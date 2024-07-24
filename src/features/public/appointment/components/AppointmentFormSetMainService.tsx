import { useContext } from "react";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { useGetPublicCompanyServices } from "../../common/hooks/useGetPublicCompanyServices";
import { AppointmentContext } from "../context/AppointmentProvider";
import { Carousel, Flex, Typography, Image, Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useCarousel } from "../../common/hooks/useCarousel";

export default function AppointmentFormSetMainService() {
  const { companyServices, errorMessage, loading } =
    useGetPublicCompanyServices();

  const { carouselRef, onWheel } = useCarousel();

  const { setService } = useContext(AppointmentContext);

  if (loading) return <Loading />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (companyServices)
    return (
      <Flex gap="4vh" vertical>
        <Carousel
          ref={carouselRef}
          arrows
          vertical
          dotPosition="left"
          effect="fade"
          infinite
          draggable
          waitForAnimate
          style={{ flex: 1 }}
        >
          {companyServices.map(({ title, description, image, id }) => (
            <div key={id}>
              <Flex
                gap="4vw"
                style={{
                  padding: "6vh 4vw",
                  alignItems: "center",
                }}
                wrap
                onWheel={onWheel}
              >
                <div style={{ flex: "1 0 30vw" }}>
                  <Image
                    src={image}
                    style={{
                      objectFit: "cover",
                      aspectRatio: "16/10",
                      height: "60vh",
                    }}
                  />
                </div>

                <Flex
                  vertical
                  style={{
                    flex: "1 0 20vw",
                    alignSelf: "stretch",
                  }}
                >
                  <Flex
                    vertical
                    gap="2vh"
                    style={{
                      flex: "1 0 20vw",
                      textAlign: "left",
                      justifyContent: "center",
                    }}
                  >
                    <Typography.Title level={2}>{title}</Typography.Title>

                    <Typography.Paragraph type="secondary">
                      {description}
                    </Typography.Paragraph>
                  </Flex>

                  <Button
                    type="primary"
                    icon={<CaretRightOutlined />}
                    iconPosition="end"
                    style={{
                      width: "max-content",
                    }}
                    onClick={() => setService(id)}
                  >
                    Choose artist
                  </Button>
                </Flex>
              </Flex>
            </div>
          ))}
        </Carousel>
      </Flex>
    );
}

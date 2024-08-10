import { Typography, Image } from "antd";
import { ClockCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PageTransition from "../../../../common/components/transitions/PageTransition";
import ErrorPage from "../../../../common/pages/Error";
import { useGetArtistsPageArtists } from "../hooks/useGetArtistsPageArtists";
import { RoutePaths } from "../../../../router/enums";

export default function ArtistsPage() {
  const { artists, loading, errorMessage } = useGetArtistsPageArtists();

  const navigate = useNavigate();

  if (loading) return <PageTransition />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (artists)
    return (
      <>
        <PageTransition />
        <div className="grid gap-[33vh] py-[10vh] text-left">
          {artists.map((artist) => (
            <div key={artist.id} className="grid gap-[10vh]">
              <div className="grid grid-cols-2 gap-[5vw]">
                <Image
                  onClick={() => navigate(`${RoutePaths.ARTISTS + artist.id}`)}
                  src={artist.profile?.avatar || ""}
                  preview={false}
                  height="100%"
                  className="object-cover cursor-pointer min-h-[100vh]"
                />
                <div>
                  <Typography.Title className="w-max mb-[2vh]" level={2}>
                    {!!artist.profile &&
                      [artist.profile.firstName, artist.profile.lastName].join(
                        " "
                      )}
                    {!!artist.profile?.nickName && (
                      <span className="text-secondary">{` «${artist.profile.nickName}»`}</span>
                    )}
                  </Typography.Title>

                  <Typography.Text
                    className="text-2xl sticky top-[22vh]"
                    type="secondary"
                  >
                    {artist.profile?.bio}
                  </Typography.Text>
                </div>
              </div>

              <div className="grid gap-[2vw]">
                <Typography.Title type="secondary" level={2}>
                  Services
                </Typography.Title>

                {!!artist.services &&
                  artist.services.map((service) => (
                    <div key={service.id} className="w-2/3 grid gap-[2vh]">
                      <Typography.Title level={3}>
                        {service.title}
                      </Typography.Title>

                      <Typography.Title className="text-secondary" level={3}>
                        <ClockCircleFilled className="mr-1" />
                        {[service.duration + "min", "$" + service.price].join(
                          " - "
                        )}
                      </Typography.Title>

                      <Typography.Paragraph
                        className="text-2xl"
                        type="secondary"
                      >
                        {service.description}
                      </Typography.Paragraph>

                      <Image
                        src={service.image || ""}
                        preview={false}
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

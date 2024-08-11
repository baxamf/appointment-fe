import { Typography, Image } from "antd";
import { useGetHomeStaff } from "../hooks/useGetHomeStaff";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../common/pages/Error";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";

export default function HomeArtists() {
  const { artists, loading, errorMessage } = useGetHomeStaff();
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    layoutEffect: false,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-45%"]);

  if (loading) return <Loading />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (artists)
    return (
      <div className="grid overflow-hidden mt-[25vh]">
        <Typography.Title
          type="secondary"
          className="mb-[15vh] py-3 uppercase text-[15vw] opacity-15 text-left"
          level={2}
        >
          Artists
        </Typography.Title>

        <div ref={targetRef} className="grid gap-[25vh]">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              className="grid grid-cols-2 gap-[10vw] items-center"
              style={{ x, translateX: index * 400 }}
            >
              <Image
                src={artist.profile?.avatar || ""}
                preview={false}
                height="100vh"
                className="object-cover cursor-pointer"
                onClick={() => navigate(`${RoutePaths.ARTISTS + artist.id}`)}
              />

              <div className="grid text-left gap-[2vh]">
                <Typography.Title className="w-max text-5xl" level={2}>
                  {!!artist.profile &&
                    [artist.profile.firstName, artist.profile.lastName].join(
                      " "
                    )}
                  {!!artist.profile?.nickName && (
                    <div className="text-secondary mt-2">{` «${artist.profile.nickName}»`}</div>
                  )}
                </Typography.Title>

                <Typography.Paragraph className="text-2xl" type="secondary">
                  {!!artist.profile && artist.profile.bio}
                </Typography.Paragraph>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
}

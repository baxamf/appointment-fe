import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import PageTransition from "../../../../common/components/transitions/PageTransition";
import HomeArtists from "../components/HomeArtists";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeArtists />
      <PageTransition />
    </>
  );
}

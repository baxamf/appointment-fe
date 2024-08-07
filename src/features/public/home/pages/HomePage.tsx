import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import PageTransition from "../../../../common/components/transitions/PageTransition";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServices />
      <PageTransition />
    </>
  );
}

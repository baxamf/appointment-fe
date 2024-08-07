import { useParams } from "react-router-dom";
import PageTransition from "../../../../common/components/transitions/PageTransition";

export default function Artist() {
  const { artistId } = useParams();
  return (
    <>
      <PageTransition />
      <h1>Artist {artistId}</h1>
    </>
  );
}

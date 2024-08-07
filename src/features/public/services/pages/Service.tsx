import { useParams } from "react-router-dom";
import PageTransition from "../../../../common/components/transitions/PageTransition";

export default function Service() {
  const { serviceId } = useParams();
  return (
    <>
      <PageTransition />
      <h1>Service {serviceId}</h1>
    </>
  );
}

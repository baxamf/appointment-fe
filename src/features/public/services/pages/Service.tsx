import { useParams } from "react-router-dom";

export default function Service() {
  const { serviceId } = useParams();
  return <h1>Service {serviceId}</h1>;
}

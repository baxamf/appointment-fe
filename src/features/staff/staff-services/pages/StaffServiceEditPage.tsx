import { useParams } from "react-router-dom";

export default function StaffServiceEditPage() {
  const { staffServiceId } = useParams();

  return <h1>StaffServiceEditPage {staffServiceId}</h1>;
}

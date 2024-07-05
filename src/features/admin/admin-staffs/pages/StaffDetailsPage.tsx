import { useParams } from "react-router-dom";

export default function StaffDetailsPage() {
  const { staffId } = useParams();
  return <h1>StaffDetailsPage {staffId}</h1>;
}

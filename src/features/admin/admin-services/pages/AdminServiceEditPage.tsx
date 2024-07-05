import { useParams } from "react-router-dom";

export default function AdminServiceEditPage() {
  const { adminServiceId } = useParams();

  return <h1>AdminServiceEditPage {adminServiceId}</h1>;
}

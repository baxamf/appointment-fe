import { useParams } from "react-router-dom";

export default function Artist() {
  const { artistId } = useParams();
  return <h1>Artist {artistId}</h1>;
}

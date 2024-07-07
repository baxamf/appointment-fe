import { useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ME } from "../graphql";

export default function HomePage() {
  const [getMe, { data, loading, error }] = useLazyQuery(GET_ME);
  console.log("data", data);

  if (loading) return <h1>Loading</h1>;
  return (
    <div>
      <h1>HomePage</h1>
      {error && <h1>{error.message}</h1>}
      <Link
        style={{ border: "1px solid white", padding: "10px 20px" }}
        to="/login"
      >
        Login
      </Link>
      <button onClick={() => getMe()}>Get me</button>
    </div>
  );
}

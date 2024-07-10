import { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../common/components/loading/Loading";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1>Error</h1>
        <Link
          style={{ border: "1px solid white", padding: "10px 20px" }}
          to="/"
        >
          Home
        </Link>

        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </Suspense>
  );
}

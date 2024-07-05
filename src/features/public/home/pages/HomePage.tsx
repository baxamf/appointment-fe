import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link
        style={{ border: "1px solid white", padding: "10px 20px" }}
        to="/login"
      >
        Login
      </Link>
    </div>
  );
}

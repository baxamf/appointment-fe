import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Login</h1>

      <Link
        style={{ border: "1px solid white", padding: "10px 20px" }}
        to="/admin"
      >
        Admin
      </Link>
      <Link
        style={{ border: "1px solid white", padding: "10px 20px" }}
        to="/staff"
      >
        Staff
      </Link>
    </>
  );
}

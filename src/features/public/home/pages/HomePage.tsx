import { useLazyQuery } from "@apollo/client";
import { GET_ME } from "../graphql";
import { Button, Typography } from "antd";

export default function HomePage() {
  const [getMe, { loading, error }] = useLazyQuery(GET_ME);

  if (loading) return <h1>Loading</h1>;
  return (
    <div>
      <Typography.Title level={1}>HomePage</Typography.Title>
      {error && <h1>{error.message}</h1>}
      <Button onClick={() => getMe()}>Get me</Button>
    </div>
  );
}

import { useLazyQuery } from "@apollo/client";
import { GET_ME } from "../graphql";
import { Button, Typography } from "antd";
import Loading from "../../../../common/components/loading/Loading";

export default function HomePage() {
  const [getMe, { loading, error }] = useLazyQuery(GET_ME);

  if (loading) return <Loading />;
  return (
    <div>
      <Typography.Title level={1}>HomePage</Typography.Title>
      {error && <h1>{error.message}</h1>}
      <Button type="primary" onClick={() => getMe()}>
        Get me
      </Button>
    </div>
  );
}

import { PropsWithChildren, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, HomeFilled } from "@ant-design/icons";
import Loading from "../common/components/loading/Loading";
import { Button, Flex, Layout, Typography } from "antd";
import ButtonLink from "../common/components/buttons/ButtonLink";

type ErrorPageProps = {
  message: string;
} & PropsWithChildren;

export default function ErrorPage({ message, ...props }: ErrorPageProps) {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Loading />}>
      <Layout
        {...props}
        style={{
          height: "100vh",
          width: "100%",
          placeContent: "center",
          textAlign: "center",
          gap: "5vh",
        }}
      >
        <Typography.Title type="secondary" level={4}>
          {message}
        </Typography.Title>

        <Flex gap="5vh" justify="center">
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
            Back
          </Button>

          <ButtonLink icon={<HomeFilled />} type="default">
            Home
          </ButtonLink>
        </Flex>
      </Layout>
    </Suspense>
  );
}

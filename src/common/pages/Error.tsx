import { PropsWithChildren, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, HomeFilled } from "@ant-design/icons";
import Loading from "../components/loading/Loading";
import { Button, Flex, Layout, Typography } from "antd";
import ButtonLink from "../components/buttons/ButtonLink";

type ErrorPageProps = {
  message: string;
} & PropsWithChildren;

export default function ErrorPage({ message, ...props }: ErrorPageProps) {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Loading />}>
      <Layout
        {...props}
        className="w-screen h-full place-content-center gap-6 bg-transparent"
      >
        <Typography.Title type="secondary" level={4}>
          {message}
        </Typography.Title>

        <Flex className="place-content-center gap-6">
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

import { Card, Flex } from "antd";
import { PropsWithChildren } from "react";

export default function StaffServiceFormLayout({
  children,
}: PropsWithChildren) {
  return (
    <Flex wrap gap="4vw">
      <Card style={{ padding: "2vh 5vw" }}>{children}</Card>
    </Flex>
  );
}

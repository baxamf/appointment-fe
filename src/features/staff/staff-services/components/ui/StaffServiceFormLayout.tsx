import { Card, Flex } from "antd";
import { PropsWithChildren } from "react";

export default function StaffServiceFormLayout({
  children,
}: PropsWithChildren) {
  return (
    <Card className="px-[4vw] py-[4vh]">
      <Flex className="flex-wrap gap-[4vw]">{children}</Flex>
    </Card>
  );
}

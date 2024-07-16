import { Card, CardProps, Flex } from "antd";
import { PropsWithChildren } from "react";

type AdminStaffListCard = PropsWithChildren & CardProps;

export default function AdminStaffListCard({
  children,
  style,
  ...props
}: AdminStaffListCard) {
  return (
    <Card
      hoverable
      style={{
        flex: "1 0 32vw",
        padding: "2vh 5vw",
        textAlign: "left",
        ...style,
      }}
      {...props}
    >
      <Flex vertical gap="4vh">
        {children}
      </Flex>
    </Card>
  );
}

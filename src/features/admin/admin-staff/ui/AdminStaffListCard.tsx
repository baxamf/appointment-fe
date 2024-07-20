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
        flex: "0 0 max(20vw, 400px)",
        padding: "2vh 2vw",
        textAlign: "left",
        ...style,
      }}
      {...props}
    >
      <Flex vertical gap="2vh">
        {children}
      </Flex>
    </Card>
  );
}

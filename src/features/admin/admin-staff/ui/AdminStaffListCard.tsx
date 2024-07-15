import { Card, CardProps } from "antd";
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
        flex: "0 0 32vw",
        padding: "2vh 5vw",
        textAlign: "left",
        ...style,
      }}
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        },
      }}
      {...props}
    >
      {children}
    </Card>
  );
}

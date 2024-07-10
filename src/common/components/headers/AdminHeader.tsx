import { Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import ButtonLink from "../buttons/ButtonLink";
import { useUser } from "../../../store/hooks/useUser";

export default function AdminHeader() {
  const user = useUser();

  return (
    <Header
      style={{
        width: "100%",
        display: "flex",
        gap: "2%",
        alignItems: "center",
      }}
    >
      <ButtonLink style={{ marginRight: "auto" }}>AppLogo</ButtonLink>

      <Typography.Title level={4}>{user?.role}</Typography.Title>

      <ButtonLink type="default">Main portal</ButtonLink>
    </Header>
  );
}

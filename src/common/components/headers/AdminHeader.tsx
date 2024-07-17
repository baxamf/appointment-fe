import { Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import ButtonLink from "../buttons/ButtonLink";
import { useUser } from "../../../store/hooks/useUser";

export default function AdminHeader() {
  const user = useUser();

  return (
    <Header className="header">
      <ButtonLink style={{ marginRight: "auto", paddingLeft: 0 }}>
        AppLogo
      </ButtonLink>

      <Typography.Title level={4}>{user?.role}</Typography.Title>

      <ButtonLink type="default">Main portal</ButtonLink>
    </Header>
  );
}

import { Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import ButtonLink from "../buttons/ButtonLink";
import { useUser } from "../../../store/hooks/useUser";
import ButtonLogout from "../buttons/ButtonLogout";

export default function AdminHeader() {
  const user = useUser();

  return (
    <Header className="w-full h-[10vh] sticky top-0 z-10 flex gap-8 items-center backdrop-blur-sm">
      <ButtonLink className="mr-auto pl-0">AppLogo</ButtonLink>

      <Typography.Title level={4}>{user?.role}</Typography.Title>

      <ButtonLink type="default">Main portal</ButtonLink>

      <ButtonLogout />
    </Header>
  );
}

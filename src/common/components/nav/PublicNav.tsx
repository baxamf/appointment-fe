import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { useSelectedNavKeys } from "../../hooks/useSelectedNavKeys";
import { RoutePaths } from "../../../router/enums";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link to={RoutePaths.SERVICES}>Services</Link>,
    key: RoutePaths.SERVICES,
  },
  {
    label: <Link to={RoutePaths.ARTISTS}>Artists</Link>,
    key: RoutePaths.ARTISTS,
  },
  {
    label: <Link to={RoutePaths.ABOUT}>About</Link>,
    key: RoutePaths.ABOUT,
  },
  {
    label: <Link to={RoutePaths.APPOINTMENT}>Appointment</Link>,
    key: RoutePaths.APPOINTMENT,
  },
];

export default function PublicNav() {
  const selectedKeys = useSelectedNavKeys(RoutePaths);

  return (
    <Menu
      className="flex-1 border-none font-bold justify-center gap-4"
      mode="horizontal"
      selectedKeys={selectedKeys}
      items={items}
    />
  );
}

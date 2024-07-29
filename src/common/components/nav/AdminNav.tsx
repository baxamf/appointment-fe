import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { useSelectedNavKeys } from "../../hooks/useSelectedNavKeys";
import { RoutePaths } from "../../../router/enums";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link to={RoutePaths.ADMIN_APPOINTMENTS}>Appointments</Link>,
    key: RoutePaths.ADMIN_APPOINTMENTS,
  },
  {
    label: <Link to={RoutePaths.ADMIN_SERVICES}>Services</Link>,
    key: RoutePaths.ADMIN_SERVICES,
  },
  {
    label: <Link to={RoutePaths.ADMIN_STAFF}>Staff</Link>,
    key: RoutePaths.ADMIN_STAFF,
  },
];

export default function AdminNav() {
  const selectedKeys = useSelectedNavKeys(RoutePaths);

  return (
    <Menu
      mode="inline"
      items={items}
      selectedKeys={selectedKeys}
      className="text-right font-bold"
    />
  );
}

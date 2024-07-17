import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { useSelectedNavKeys } from "../../hooks/useSelectedNavKeys";
import { RoutePaths } from "../../../router/enums";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link to={RoutePaths.STAFF_SCHEDULE}>Schedule</Link>,
    key: RoutePaths.STAFF_SCHEDULE,
  },
  {
    label: <Link to={RoutePaths.STAFF_SERVICES}>Services</Link>,
    key: RoutePaths.STAFF_SERVICES,
  },
];

export default function StaffNav() {
  const selectedKeys = useSelectedNavKeys(RoutePaths);

  return (
    <Menu
      mode="inline"
      items={items}
      selectedKeys={selectedKeys}
      style={{
        textAlign: "right",
        fontWeight: "bold",
      }}
    />
  );
}

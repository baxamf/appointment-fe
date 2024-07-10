import { Menu, MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link to="services">Services</Link>,
    key: "/admin/services",
  },
  {
    label: <Link to="staff">Staff</Link>,
    key: "/admin/staff",
  },
];

export default function AdminNav() {
  const location = useLocation();

  return (
    <Menu
      mode="inline"
      items={items}
      selectedKeys={[location.pathname]}
      style={{ textAlign: "right", fontWeight: "bold" }}
    />
  );
}

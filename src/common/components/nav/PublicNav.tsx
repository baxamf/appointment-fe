import { Menu, MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link to="services">Services</Link>,
    key: "/services",
  },
  {
    label: <Link to="artists">Artists</Link>,
    key: "/artists",
  },
  {
    label: <Link to="about">About</Link>,
    key: "/about",
  },
];

export default function PublicNav() {
  const location = useLocation();

  return (
    <Menu
      style={{
        flex: 1,
        border: "none",
        fontWeight: "bold",
        justifyContent: "center",
        gap: 10,
      }}
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={items}
    />
  );
}

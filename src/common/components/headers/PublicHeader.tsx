import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../buttons/ButtonLink";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link to="services">Services</Link>,
    key: "service",
  },
  {
    label: <Link to="about">About</Link>,
    key: "about",
  },
];

export default function PublicHeader() {
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentMenuItem(e.key);
  };

  return (
    <Header
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      <ButtonLink handler={() => setCurrentMenuItem("")}>
        PublicHeader
      </ButtonLink>
      <Menu
        style={{
          flex: 1,
          border: "none",
          fontWeight: "bold",
          justifyContent: "center",
          gap: 10,
        }}
        mode="horizontal"
        selectedKeys={[currentMenuItem]}
        onClick={onClick}
        items={items}
      />
      <ButtonLink type="default" url="/login">
        Sign In
      </ButtonLink>
    </Header>
  );
}

import { Header } from "antd/es/layout/layout";
import PublicNav from "../nav/PublicNav";
import ButtonLink from "../buttons/ButtonLink";

export default function PublicHeader() {
  return (
    <Header
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      <ButtonLink>AppLogo</ButtonLink>

      <PublicNav />

      <ButtonLink type="default" url="/login">
        Sign In
      </ButtonLink>
    </Header>
  );
}

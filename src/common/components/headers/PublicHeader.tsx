import { Header } from "antd/es/layout/layout";
import PublicNav from "../nav/PublicNav";
import ButtonLink from "../buttons/ButtonLink";

export default function PublicHeader() {
  return (
    <Header className="w-full h-[10vh] sticky top-0 z-10 flex gap-8 items-center backdrop-blur-sm">
      <ButtonLink className="pl-0">AppLogo</ButtonLink>

      <PublicNav />

      <ButtonLink type="default" url="/login">
        Sign In
      </ButtonLink>
    </Header>
  );
}

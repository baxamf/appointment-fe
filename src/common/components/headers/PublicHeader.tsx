import { Header } from "antd/es/layout/layout";
import PublicNav from "../nav/PublicNav";
import ButtonLink from "../buttons/ButtonLink";
import ButtonToDashboard from "../buttons/ButtonToDashboard";
import { useUser } from "../../../store/hooks/useUser";
import ButtonLogout from "../buttons/ButtonLogout";
import ButtonLogin from "../buttons/ButtonLogin";

export default function PublicHeader() {
  const user = useUser();

  return (
    <Header className="w-full h-[10vh] sticky top-0 z-10 flex gap-8 items-center backdrop-blur-sm">
      <ButtonLink className="pl-0">AppLogo</ButtonLink>

      <PublicNav />

      {!!user && <ButtonToDashboard {...user} />}

      {user ? <ButtonLogout /> : <ButtonLogin />}
    </Header>
  );
}

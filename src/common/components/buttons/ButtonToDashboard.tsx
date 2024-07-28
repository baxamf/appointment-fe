import { useLocation } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { TUser } from "../../../store/StoreProvider";
import { UserRole } from "../../../api/__generated__/graphql";

export default function ButtonToDashboard({ role }: TUser) {
  const { pathname } = useLocation();

  if (role == UserRole.User) return;

  const toDashboard = role && role.toLowerCase() != pathname.split("/", 2)[1];

  if (toDashboard)
    return (
      <ButtonLink url={`/${role.toLowerCase()}`} type="default">
        To dashboard
      </ButtonLink>
    );
}

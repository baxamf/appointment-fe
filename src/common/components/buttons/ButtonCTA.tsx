import { RoutePaths } from "../../../router/enums";
import ButtonLink from "./ButtonLink";

export default function ButtonCTA() {
  return (
    <ButtonLink
      url={RoutePaths.APPOINTMENT}
      type="primary"
      style={{ maxWidth: 300, alignSelf: "center" }}
    >
      Make an appointment
    </ButtonLink>
  );
}

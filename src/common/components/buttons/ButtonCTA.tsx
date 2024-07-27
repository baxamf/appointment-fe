import { RoutePaths } from "../../../router/enums";
import ButtonLink from "./ButtonLink";

export default function ButtonCTA() {
  return (
    <ButtonLink
      url={RoutePaths.APPOINTMENT}
      type="primary"
      className="max-w-80 mx-auto"
    >
      Make an appointment
    </ButtonLink>
  );
}

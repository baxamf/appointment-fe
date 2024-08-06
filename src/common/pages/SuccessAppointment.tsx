import { Typography } from "antd";
import ButtonLink from "../components/buttons/ButtonLink";

export default function SuccessAppointment() {
  return (
    <div className="grid gap-5 place-content-center">
      <Typography.Title type="secondary" level={2}>
        You have booked an appointment
      </Typography.Title>

      <ButtonLink className="w-max place-self-center" type="default">
        Home
      </ButtonLink>
    </div>
  );
}

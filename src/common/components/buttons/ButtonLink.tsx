import { Button, ButtonProps } from "antd";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type ButtonLink = {
  url?: string;
  handler?: () => void;
} & PropsWithChildren &
  ButtonProps;

export default function ButtonLink({
  url = "/",
  type = "link",
  handler,
  ...props
}: ButtonLink) {
  const navigate = useNavigate();

  const clickHandler = () => {
    if (handler) {
      handler();
    }

    navigate(url);
  };

  return (
    <Button {...props} onClick={clickHandler} type={type}>
      {props.children}
    </Button>
  );
}

import { Card, theme } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../../router/enums";

export default function AddAdminServiceCard() {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      onClick={() => navigate(RoutePaths.ADMIN_SERVICES_CREATE)}
      style={{
        flex: "1 0 32vw",
        padding: "2vh 5vw",
        minHeight: "25vh",
        placeContent: "center",
        border: `2px dashed ${token.colorTextSecondary}`,
        borderStyle: "dashed",
      }}
    >
      <PlusSquareOutlined
        style={{
          margin: "auto",
          fontSize: 25,
          color: token.colorTextSecondary,
        }}
      />
    </Card>
  );
}

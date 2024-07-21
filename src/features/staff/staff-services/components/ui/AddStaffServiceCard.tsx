import { Card, theme } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../../router/enums";

export default function AddStaffServiceCard() {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      onClick={() => navigate(RoutePaths.STAFF_SERVICES_CREATE)}
      style={{
        minHeight: "25vh",
        placeContent: "center",
        border: `1px dashed ${token.colorTextSecondary}`,
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

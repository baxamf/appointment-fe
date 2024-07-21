import { theme } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import AdminStaffListCard from "./AdminStaffListCard";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../router/enums";

export default function AddStaffListCard() {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  return (
    <AdminStaffListCard
      onClick={() => navigate(RoutePaths.ADMIN_CREATE_STAFF)}
      style={{
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
    </AdminStaffListCard>
  );
}

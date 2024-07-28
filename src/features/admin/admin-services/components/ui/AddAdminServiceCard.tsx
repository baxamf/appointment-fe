import { Card } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../../router/enums";

export default function AddAdminServiceCard() {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      onClick={() => navigate(RoutePaths.ADMIN_SERVICES_CREATE)}
      className="grid min-h-[25vh] flex-1 place-content-center border-secondary border-dashed hover:shadow-3xl hover:border-solid transition"
    >
      <PlusSquareOutlined className="text-secondary text-2xl" />
    </Card>
  );
}

import { Card } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../../router/enums";

export default function AddStaffServiceCard() {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      onClick={() => navigate(RoutePaths.STAFF_SERVICES_CREATE)}
      className="grid min-h-[25vh] place-content-center border-dashed border border-secondary "
    >
      <PlusSquareOutlined className="text-secondary text-2xl" />
    </Card>
  );
}

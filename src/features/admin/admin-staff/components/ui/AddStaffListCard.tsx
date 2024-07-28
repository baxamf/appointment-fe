import { PlusSquareOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../../router/enums";
import { Card } from "antd";

export default function AddStaffListCard() {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      onClick={() => navigate(RoutePaths.ADMIN_CREATE_STAFF)}
      className="grid flex-1 basis-[max(20vw,300px)] place-content-center border-secondary border-dashed hover:shadow-3xl hover:border-solid transition"
    >
      <PlusSquareOutlined className="text-secondary text-2xl" />
    </Card>
  );
}

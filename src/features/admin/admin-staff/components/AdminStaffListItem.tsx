import { Image, Typography } from "antd";
import { GetAdminStaffQuery } from "../../../../api/__generated__/graphql";
import { useNavigateToDetail } from "../../../../common/hooks/useNavigateToDetail";
import AdminStaffListCard from "../ui/AdminStaffListCard";

type AdminStaffListItemProps = GetAdminStaffQuery["getStaff"][0];

export default function AdminStaffListItem({
  id,
  profile,
}: AdminStaffListItemProps) {
  const { navigateToDetail } = useNavigateToDetail(id);

  return (
    <AdminStaffListCard onClick={navigateToDetail}>
      <Image
        src={profile?.avatar || ""}
        preview={false}
        width="100%"
        style={{ objectFit: "cover", aspectRatio: "1/1" }}
      />

      <Typography.Title title="123123" level={2}>
        {[profile?.firstName, profile?.lastName].join(" ")}
      </Typography.Title>
    </AdminStaffListCard>
  );
}

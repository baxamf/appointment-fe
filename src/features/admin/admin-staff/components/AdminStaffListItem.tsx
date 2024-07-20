import { Image, theme, Typography } from "antd";
import { GetAdminStaffQuery } from "../../../../api/__generated__/graphql";
import { useNavigateToDetail } from "../../../../common/hooks/useNavigateToDetail";
import AdminStaffListCard from "../ui/AdminStaffListCard";

type AdminStaffListItemProps = GetAdminStaffQuery["getStaff"][0];

export default function AdminStaffListItem({
  id,
  profile,
}: AdminStaffListItemProps) {
  const { navigateToDetail } = useNavigateToDetail(id);
  const { token } = theme.useToken();

  return (
    <AdminStaffListCard onClick={navigateToDetail}>
      <Image
        src={profile?.avatar || ""}
        fallback="https://images.pexels.com/photos/4459231/pexels-photo-4459231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        preview={false}
        width="100%"
        style={{ objectFit: "cover", aspectRatio: "3/4" }}
      />

      <Typography.Title level={4}>
        {[profile?.firstName, profile?.lastName].join(" ")}
        {!!profile?.nickName && (
          <div
            style={{ color: token.colorTextSecondary }}
          >{`«${profile.nickName}»`}</div>
        )}
      </Typography.Title>

      <Typography.Text type="secondary">
        {profile?.specialization}
      </Typography.Text>
    </AdminStaffListCard>
  );
}

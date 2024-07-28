import { Card, Flex, Image, Typography } from "antd";
import { GetAdminStaffQuery } from "../../../../../api/__generated__/graphql";
import { useNavigateToDetail } from "../../../../../common/hooks/useNavigateToDetail";

type AdminStaffListItemProps = GetAdminStaffQuery["getStaff"][0];

export default function AdminStaffListItem({
  id,
  profile,
}: AdminStaffListItemProps) {
  const { navigateToDetail } = useNavigateToDetail(id);

  return (
    <Card
      hoverable
      className="flex-1 basis-[max(20vw,300px)] px-[2vw] py-[1vh] text-left hover:shadow-3xl transition"
      onClick={navigateToDetail}
    >
      <Flex className="flex-col gap-[2vh]">
        <Image
          src={profile?.avatar || ""}
          fallback="https://images.pexels.com/photos/4459231/pexels-photo-4459231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          preview={false}
          width="100%"
          className="object-cover aspect-[3/4]"
        />

        <Typography.Title level={4}>
          {[profile?.firstName, profile?.lastName].join(" ")}
          {!!profile?.nickName && (
            <div className="text-secondary">{`«${profile.nickName}»`}</div>
          )}
        </Typography.Title>

        <Typography.Text type="secondary">
          {profile?.specialization}
        </Typography.Text>
      </Flex>
    </Card>
  );
}

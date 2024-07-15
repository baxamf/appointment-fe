import { Card, Flex, Typography, Image, theme } from "antd";
import { PhoneFilled, MailFilled } from "@ant-design/icons";
import Loading from "../../../../common/components/loading/Loading";
import ErrorPage from "../../../../pages/Error";
import { useGetAdminStaffInfo } from "../hooks/useGetAdminStaffInfo";

export default function AdminStaffInfo() {
  const { token } = theme.useToken();

  const { staffInfo, staffInfoLoading, StaffInfoError } =
    useGetAdminStaffInfo();

  if (staffInfoLoading) return <Loading />;

  if (StaffInfoError) return <ErrorPage message={StaffInfoError.message} />;

  if (staffInfo && staffInfo.profile) {
    const { profile, socials } = staffInfo;

    return (
      <Card style={{ padding: "4vh 5vw", width: "100%" }}>
        <Flex gap="4vw" wrap style={{ textAlign: "left" }}>
          <Flex style={{ flex: "1 0 20vw" }}>
            <Image
              src={profile?.avatar || ""}
              style={{
                objectFit: "cover",
                aspectRatio: "1/1",
              }}
            />
          </Flex>

          <Flex vertical gap="2vh" style={{ flex: "1 0 25vw" }}>
            <Typography.Title level={2}>
              {[profile.firstName, profile.lastName].join(" ")}
            </Typography.Title>

            <Typography.Paragraph type="secondary">
              {profile.bio}
            </Typography.Paragraph>

            <Flex wrap gap="2vh">
              <Typography.Paragraph>
                <PhoneFilled
                  style={{ marginRight: 5, color: token.colorTextSecondary }}
                />

                {profile?.phone}
              </Typography.Paragraph>

              <Typography.Paragraph>
                <MailFilled
                  style={{ marginRight: 5, color: token.colorTextSecondary }}
                />

                {staffInfo.email}
              </Typography.Paragraph>
            </Flex>

            {!!socials?.length && (
              <Flex wrap gap="2vh">
                {socials?.map(({ id, title, link }) => (
                  <Typography.Link
                    style={{ fontWeight: "bold" }}
                    key={id}
                    href={link}
                    target="_blank"
                  >
                    {title}
                  </Typography.Link>
                ))}
              </Flex>
            )}

            <Typography.Text type="secondary" style={{ marginTop: "auto" }}>
              joined:{" "}
              <Typography.Text strong>
                {new Date(staffInfo.createdAt).toLocaleDateString()}
              </Typography.Text>
            </Typography.Text>
          </Flex>
        </Flex>
      </Card>
    );
  }
}

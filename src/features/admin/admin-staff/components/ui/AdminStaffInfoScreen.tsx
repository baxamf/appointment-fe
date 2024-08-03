import { Card, Flex, Image, Typography } from "antd";
import { PhoneFilled, MailFilled } from "@ant-design/icons";
import { GetAdminStaffInfoQuery } from "../../../../../api/__generated__/graphql";

type AdminStaffInfoScreenProps = GetAdminStaffInfoQuery["getUser"];

export default function AdminStaffInfoScreen(
  staffInfo: AdminStaffInfoScreenProps
) {
  if (staffInfo && staffInfo.profile) {
    const { profile, socials } = staffInfo;

    return (
      <Card className="w-full px-[4vw] py-[2vh]">
        <Typography.Title type="secondary" className="mb-[4vh]" level={2}>
          Details
        </Typography.Title>

        <Flex className="flex-wrap gap-x-[4vw] gap-y-[2vh] text-left">
          <Flex className="flex-1 basis-[20vw]">
            <Image
              src={profile?.avatar || ""}
              height="65vh"
              fallback="https://images.pexels.com/photos/4459231/pexels-photo-4459231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover aspect-[3/4]"
            />
          </Flex>

          <Flex className="flex-col gap-[2vh] flex-1 basis-[25vw]">
            <Typography.Title className="w-max" level={2}>
              {[profile.firstName, profile.lastName].join(" ")}
              {!!profile?.nickName && (
                <span className="text-secondary">{` «${profile.nickName}»`}</span>
              )}
            </Typography.Title>

            <Typography.Text className="text-secondary font-bold">
              {profile.specialization}
            </Typography.Text>

            <Typography.Paragraph type="secondary">
              {profile.bio}
            </Typography.Paragraph>

            <Flex className="flex-wrap gap-[2vh]">
              <Typography.Paragraph>
                <PhoneFilled className="mr-1 text-secondary" />

                {profile?.phone}
              </Typography.Paragraph>

              <Typography.Paragraph>
                <MailFilled className="mr-1 text-secondary" />

                {staffInfo.email}
              </Typography.Paragraph>
            </Flex>

            {!!socials?.length && (
              <Flex className="flex-wrap gap-[2vh]">
                {socials?.map(({ id, title, link }) => (
                  <Typography.Link
                    className="font-bold"
                    key={id}
                    href={link}
                    target="_blank"
                  >
                    {title}
                  </Typography.Link>
                ))}
              </Flex>
            )}

            <Typography.Text type="secondary" className="mt-auto">
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

import { Flex, Typography } from "antd";
import ButtonLink from "../../../../common/components/buttons/ButtonLink";

export default function HomePage() {
  return (
    <Flex vertical justify="space-evenly">
      <Flex vertical gap={20}>
        <Typography.Title level={1}>
          Elevate Your Look: Exquisite Tattoos & Piercings by Experts
        </Typography.Title>

        <Typography.Paragraph
          type="secondary"
          style={{ fontSize: 20, paddingInline: "25%" }}
        >
          We specialize in creating unique and eye-catching body art for all
          personalities. Our skilled artists create personalized body art that
          reflects your individual style. We celebrate all styles and welcome
          you to create a look that's truly yours.
        </Typography.Paragraph>
      </Flex>

      <Flex vertical gap={20}>
        <Typography.Title level={4}>
          Discover Your Perfect Piece or Book Your Appointment Now!
        </Typography.Title>

        <ButtonLink
          url="/appointment"
          type="primary"
          style={{ maxWidth: 300, alignSelf: "center" }}
        >
          Make an appointment
        </ButtonLink>
      </Flex>
    </Flex>
  );
}

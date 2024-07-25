import { Flex, Typography } from "antd";
import ButtonCTA from "../../../../common/components/buttons/ButtonCTA";

export default function HomePage() {
  return (
    <Flex vertical justify="space-evenly">
      <Flex vertical gap={20}>
        <Typography.Title level={1} style={{ zIndex: 1 }}>
          Elevate Your Look: Exquisite Tattoos by Experts
        </Typography.Title>

        <Typography.Paragraph
          type="secondary"
          style={{ fontSize: 20, paddingInline: "25%", zIndex: 1 }}
        >
          We specialize in creating unique and eye-catching body art for all
          personalities. Our skilled artists create personalized body art that
          reflects your individual style. We celebrate all styles and welcome
          you to create a look that's truly yours.
        </Typography.Paragraph>
      </Flex>

      <Flex vertical gap={20} style={{ zIndex: 1 }}>
        <Typography.Title level={4}>
          Discover Your Perfect Piece or Book Your Appointment Now!
        </Typography.Title>

        <ButtonCTA />
      </Flex>
    </Flex>
  );
}

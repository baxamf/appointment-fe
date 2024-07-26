import { Flex, Typography } from "antd";
import ButtonCTA from "../../../../common/components/buttons/ButtonCTA";

export default function HomePage() {
  return (
    <Flex className="flex-col justify-evenly">
      <Flex className="flex-col gap-5 items-center">
        <Typography.Title level={1} className="z-10">
          Elevate Your Look: Exquisite Tattoos by Experts
        </Typography.Title>

        <Typography.Paragraph type="secondary" className="text-xl z-10 w-1/2">
          We specialize in creating unique and eye-catching body art for all
          personalities. Our skilled artists create personalized body art that
          reflects your individual style. We celebrate all styles and welcome
          you to create a look that's truly yours.
        </Typography.Paragraph>
      </Flex>

      <Flex className="flex-col gap-8 z-10">
        <Typography.Title level={4}>
          Discover Your Perfect Piece or Book Your Appointment Now!
        </Typography.Title>

        <ButtonCTA />
      </Flex>
    </Flex>
  );
}

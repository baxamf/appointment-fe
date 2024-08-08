import { Typography, Image } from "antd";
import { HomeService } from "../../types";

type HomeServiceScreenProps = {
  service: HomeService;
  toService: () => void;
};

export default function HomeServiceScreen({
  service,
  toService,
}: HomeServiceScreenProps) {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-[10vw] text-left">
      <Image
        onClick={toService}
        src={service.image}
        preview={false}
        height="100%"
        className="object-cover cursor-pointer"
      />

      <div className="grid ">
        <Typography.Title className="sticky top-[calc(50%-10vh)]" level={2}>
          {service.title}
        </Typography.Title>
        <Typography.Paragraph
          className="sticky top-1/2 place-self-start"
          type="secondary"
        >
          {service.description}
        </Typography.Paragraph>
      </div>
    </div>
  );
}

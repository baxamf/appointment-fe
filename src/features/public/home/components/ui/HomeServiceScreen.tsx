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
    <div className="grid grid-cols-2 min-h-screen mb-[50vh] text-left">
      <Image
        onClick={toService}
        src={service.image}
        preview={false}
        height="100%"
        width="auto"
        className="object-cover cursor-pointer"
      />

      <div className="grid ml-[10vw]">
        <Typography.Title className="sticky top-1/3" level={2}>
          {service.title}
        </Typography.Title>
        <Typography.Paragraph
          className="sticky top-1/3 place-self-start"
          type="secondary"
        >
          {service.description}
        </Typography.Paragraph>
      </div>
    </div>
  );
}

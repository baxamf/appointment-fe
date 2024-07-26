import { Typography } from "antd";
import { Footer } from "antd/es/layout/layout";

export default function PublicFooter() {
  return (
    <Footer className="mt-auto">
      <Typography.Paragraph type="secondary">
        Appointment App © {new Date().getFullYear()}
      </Typography.Paragraph>
    </Footer>
  );
}

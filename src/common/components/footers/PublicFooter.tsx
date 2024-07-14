import { Typography } from "antd";
import { Footer } from "antd/es/layout/layout";

export default function PublicFooter() {
  return (
    <Footer style={{ marginTop: "auto" }}>
      <Typography.Paragraph type="secondary">
        Appointment App © {new Date().getFullYear()}
      </Typography.Paragraph>
    </Footer>
  );
}

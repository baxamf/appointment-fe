import { Footer } from "antd/es/layout/layout";

export default function PublicFooter() {
  return (
    <Footer style={{ marginTop: "auto" }}>
      Public Footer {new Date().getFullYear()}
    </Footer>
  );
}

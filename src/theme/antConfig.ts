import { ThemeConfig, theme } from "antd";

export const darkTheme: ThemeConfig = {
  components: {
    Input: {
      fontSize: 16,
      lineHeight: 2,
      paddingBlock: 5,
    },
    Menu: {
      fontSize: 20,
      itemBg: "#0C0C0C",
    },
    Button: {
      fontWeight: "bold",
      paddingBlock: 20,
      paddingInline: 40,
    },
    Layout: {
      headerBg: "#0C0C0C",
    },
    Form: {
      itemMarginBottom: 0,
    },
  },
  algorithm: theme.darkAlgorithm,
  token: {
    colorText: "#EEEEEE",
    colorTextBase: "#fff",
    colorLink: "#EEEEEE",
    borderRadius: 3,
    colorBgBase: "#0C0C0C",
    colorBgContainer: "#0C0C0C",
    colorPrimary: "#9B3922",
    fontFamily: "Inter",
  },
};

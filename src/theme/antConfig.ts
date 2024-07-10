import { ThemeConfig, theme } from "antd";

export const darkTheme: ThemeConfig = {
  components: {
    Typography: {
      fontSizeHeading1: 54,
      fontWeightStrong: 900,
      titleMarginBottom: 0,
    },
    Input: {
      fontSize: 16,
      lineHeight: 2,
      paddingBlock: 5,
    },
    Menu: {
      fontSize: 20,
      itemHeight: 60,
      itemBg: "#0C0C0C",
    },
    Button: {
      fontWeight: "bold",
      paddingBlock: 20,
      paddingInline: 40,
    },
    Layout: {
      headerBg: "#0C0C0C",
      headerPadding: 0,
    },
    Form: {
      itemMarginBottom: 0,
    },
  },
  algorithm: theme.darkAlgorithm,
  token: {
    fontSize: 16,
    fontFamily: "Inter",
    colorText: "#EEEEEE",
    colorTextBase: "#fff",
    colorLink: "#EEEEEE",
    colorBgBase: "#0C0C0C",
    colorBgContainer: "#0C0C0C",
    colorPrimary: "#9B3922",
    borderRadius: 3,
  },
};

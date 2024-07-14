import { ThemeConfig, theme } from "antd";

export const darkTheme: ThemeConfig = {
  components: {
    Typography: {
      fontSizeHeading1: 54,
      fontWeightStrong: 900,
      titleMarginBottom: 0,
    },
    Divider: {
      colorText: "rgb(72, 30, 20)",
      colorBgBase: "rgb(72, 30, 20)",
      fontSize: 14,
      algorithm: true,
    },
    Input: {
      fontSize: 16,
      lineHeight: 2,
      paddingBlock: 5,
    },
    Tag: {
      defaultBg: "rgba(72, 30, 20, .5)",
      colorBorder: "rgb(72, 30, 20)",
      fontSize: 20,
      algorithm: true,
    },
    Menu: {
      fontSize: 20,
      itemHeight: 60,
      itemBg: "transparent",
      colorBgBase: "transparent",
    },
    Button: {
      fontWeight: "bold",
      paddingBlock: 20,
      paddingInline: 40,
    },
    Layout: {
      headerBg: "transparent",
      headerPadding: 0,
      footerBg: "transparent",
      siderBg: "transparent",
    },
    Form: {
      itemMarginBottom: 0,
      labelColor: "rgb(72, 30, 20)",
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
    colorBorderSecondary: "rgba(72, 30, 20, .3)",
    borderRadius: 3,
  },
};

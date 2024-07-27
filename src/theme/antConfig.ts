import { ThemeConfig, theme } from "antd";

export const darkTheme: ThemeConfig = {
  components: {
    Typography: {
      fontSizeHeading1: 54,
      fontWeightStrong: 900,
      titleMarginBottom: 0,
      titleMarginTop: 0,
      colorLink: "#481E14",
    },
    Divider: {
      margin: 0,
      colorText: "rgb(72, 30, 20)",
      colorBgBase: "rgb(72, 30, 20)",
      fontSize: 14,
      algorithm: true,
    },
    Input: {
      paddingBlock: 10,
      paddingBlockLG: 12,
      paddingBlockSM: 12,
      colorBgContainer: "transparent",
    },
    DatePicker: {
      colorBgContainer: "transparent",
      cellHeight: 40,
      cellWidth: 50,
    },
    Select: {
      fontSize: 16,
      optionPadding: "2vh",
      colorBgContainer: "transparent",
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
      colorBgContainer: "transparent",
      paddingBlock: 24,
      paddingInline: 40,
      paddingBlockLG: 24,
      paddingInlineLG: 40,
      fontWeightStrong: 900,
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
  token: {
    fontSize: 16,
    fontFamily: "Inter",
    colorText: "#EEEEEE",
    colorTextSecondary: "#481E14",
    colorTextBase: "#fff",
    colorLink: "#EEEEEE",
    colorBgBase: "#0C0C0C",
    colorBgContainer: "#0C0C0C",
    colorPrimary: "#9B3922",
    colorBorderSecondary: "rgba(72, 30, 20, .3)",
    borderRadius: 3,
  },
  algorithm: theme.darkAlgorithm,
};

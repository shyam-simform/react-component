import { ThemeType } from "../contextProviders/ChangeThemeProvider";
import AppThemeColors from "./AppThemeColors";
import { ThemeConfig } from "antd";
export const getColor = (theme: ThemeType) => {
  return AppThemeColors[theme];
};

export const getAntTheme = (theme: ThemeType) => {
  const themeColors = AppThemeColors[theme];
  return {
    // fontFamily: `'Inter', sans-serif`,
    colorPrimary: themeColors.primary,
    // colorPrimaryBg: themeColors.primary,
  };
};

export const getAntComponent: (
  theme: ThemeType
) => ThemeConfig["components"] = (theme: ThemeType) => {
  const themeColors = AppThemeColors[theme];
  console.log(themeColors)
  return {
    Button: {
      defaultBg: "#194BFB",
      //   color: themeColors.primary,
      //   // controlHeight: 51,
      //   // controlHeightSX: 50,
      //   // controlHeightSM: 38,
      //   // controlHeightLG: 60,
      //   // colorBorder: themeColors.primary,
    },
  };
};

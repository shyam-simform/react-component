import { ThemeType } from "../contextProviders/ChangeThemeProvider";
export interface ColorValues {
  primary: string;
  white: string;
  black: string;
}
const AppThemeColors: Record<ThemeType, ColorValues> = {
  Default: {
    primary: "#194BFB",
    white: "#fff",
    black: "#000",
  },

  WhiteMode: {
    primary: "#fff",
    white: "#fff",
    black: "#000",
  },
};

export default AppThemeColors;

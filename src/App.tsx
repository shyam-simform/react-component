import "./App.css";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import { useChangeTheme } from "./contextProviders/ChangeThemeProvider";
import { getAntComponent, getAntTheme, getColor } from "./config/themeHelper";
import { GlobalStyle } from "./config/global.config";
import OtpAuthentication from "./pages/OtpAuthentication/OtpAuthentication";

function App() {
  const { theme, setTheme } = useChangeTheme();
  console.log(setTheme)
  return (
    <ThemeProvider theme={getColor(theme)}>
      <ConfigProvider
        theme={{
          token: getAntTheme(theme),
          inherit: false,
          components: getAntComponent(theme),

        }}
      >
        <GlobalStyle />
        {/* <SignIn /> */}
        {/* <ForgotPassword /> */}
        <OtpAuthentication/>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;

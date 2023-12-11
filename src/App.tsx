import "./App.css";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import { useChangeTheme } from "./contextProviders/ChangeThemeProvider";
import { getAntComponent, getAntTheme, getColor } from "./config/themeHelper";
import { GlobalStyle } from "./config/global.config";
import SignIn from "./pages/SignIn/SignIn";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import OtpAuthentication from "./pages/OtpAuthentication/OtpAuthentication";
import Reason from "./pages/Reason/Reason";
import { Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="otp-authentication" element={<OtpAuthentication />} />
          <Route path="reason" element={<Reason />} />
        </Routes>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router";
import { ConfigProvider } from "antd";
import { darkTheme } from "./theme/antConfig";
import { StyleProvider } from "@ant-design/cssinjs";
import NoiseFrame from "./common/components/noise/NoiseFrame";
import ReactLenis from "lenis/react";

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider theme={darkTheme}>
        <NoiseFrame />
        <ReactLenis root options={{ lerp: 0.075, duration: 2 }}>
          <RouterProvider router={router()} />
        </ReactLenis>
      </ConfigProvider>
    </StyleProvider>
  );
}

export default App;

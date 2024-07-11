import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router";
import { ConfigProvider } from "antd";
import { darkTheme } from "./theme/antConfig";
import NoiseFrame from "./common/components/noise/NoiseFrame";

function App() {
  return (
    <ConfigProvider theme={darkTheme}>
      <NoiseFrame />
      <RouterProvider router={router()} />
    </ConfigProvider>
  );
}

export default App;

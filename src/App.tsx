import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router";
import { ConfigProvider } from "antd";
import { darkTheme } from "./theme/antConfig";

function App() {
  return (
    <ConfigProvider theme={darkTheme}>
      <RouterProvider router={router()} />
    </ConfigProvider>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router";
import { ConfigProvider, theme } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            fontSize: 16,
            lineHeight: 2,
            paddingBlock: 5,
          },
        },
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#854d0e",
          borderRadius: 3,
          fontFamily: "Inter",
        },
      }}
    >
      <RouterProvider router={router()} />
    </ConfigProvider>
  );
}

export default App;

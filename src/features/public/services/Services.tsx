import { Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import Service from "./pages/Service";

export default function Services() {
  return (
    <Routes>
      <Route index element={<ServicesPage />} />
      <Route path=":serviceId" element={<Service />} />
    </Routes>
  );
}

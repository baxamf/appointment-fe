import { Route, Routes } from "react-router-dom";
import StaffServicesPage from "./pages/StaffServicesPage";
import StaffServiceCreatePage from "./pages/StaffServiceCreatePage";
import StaffServiceDetailPage from "./pages/StaffServiceDetailPage";

export default function StaffServices() {
  return (
    <Routes>
      <Route index element={<StaffServicesPage />} />
      <Route path="create" element={<StaffServiceCreatePage />} />
      <Route path=":staffServiceId" element={<StaffServiceDetailPage />} />
    </Routes>
  );
}

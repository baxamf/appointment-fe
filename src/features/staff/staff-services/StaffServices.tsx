import { Route, Routes } from "react-router-dom";
import StaffServicesListPage from "./pages/StaffServicesListPage";
import StaffServiceCreatePage from "./pages/StaffServiceCreatePage";
import StaffServiceEditPage from "./pages/StaffServiceEditPage";

export default function StaffServices() {
  return (
    <Routes>
      <Route index element={<StaffServicesListPage />} />
      <Route path="create" element={<StaffServiceCreatePage />} />
      <Route path=":staffServiceId" element={<StaffServiceEditPage />} />
    </Routes>
  );
}

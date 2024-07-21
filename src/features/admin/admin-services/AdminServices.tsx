import { Route, Routes } from "react-router-dom";
import AdminServiceCreatePage from "./pages/AdminServiceCreatePage";
import AdminServiceDetailPage from "./pages/AdminServiceDetailPage";
import AdminServicesPage from "./pages/AdminServicesPage";

export default function AdminServices() {
  return (
    <Routes>
      <Route index element={<AdminServicesPage />} />
      <Route path="create" element={<AdminServiceCreatePage />} />
      <Route path=":companyServiceId" element={<AdminServiceDetailPage />} />
    </Routes>
  );
}

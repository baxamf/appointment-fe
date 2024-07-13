import { Route, Routes } from "react-router-dom";
import AdminServiceCreatePage from "./pages/AdminServiceCreatePage";
import AdminServiceEditPage from "./pages/AdminServiceEditPage";
import AdminServicesPage from "./pages/AdminServicesListPage";

export default function AdminServices() {
  return (
    <Routes>
      <Route index element={<AdminServicesPage />} />
      <Route path="create" element={<AdminServiceCreatePage />} />
      <Route path=":companyServiceId" element={<AdminServiceEditPage />} />
    </Routes>
  );
}

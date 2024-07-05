import { Route, Routes } from "react-router-dom";
import AdminServicesList from "./pages/AdminServicesListPage";
import AdminServiceCreatePage from "./pages/AdminServiceCreatePage";
import AdminServiceEditPage from "./pages/AdminServiceEditPage";

export default function AdminServices() {
  return (
    <Routes>
      <Route index element={<AdminServicesList />} />
      <Route path="create" element={<AdminServiceCreatePage />} />
      <Route path=":adminServiceId" element={<AdminServiceEditPage />} />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import AdminStaffPage from "./pages/AdminStaffPage";
import AdminStaffCreatePage from "./pages/AdminStaffCreatePage";
import AdminStaffDetailsPage from "./pages/AdminStaffDetailsPage";

export default function AdminStaff() {
  return (
    <Routes>
      <Route index element={<AdminStaffPage />} />
      <Route path="create" element={<AdminStaffCreatePage />} />
      <Route path=":staffId" element={<AdminStaffDetailsPage />} />
    </Routes>
  );
}

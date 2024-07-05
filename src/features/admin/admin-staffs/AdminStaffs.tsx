import { Route, Routes } from "react-router-dom";
import StaffsListPage from "./pages/StaffsListPage";
import StaffDetailsPage from "./pages/StaffDetailsPage";

export default function AdminStaffs() {
  return (
    <Routes>
      <Route index element={<StaffsListPage />} />
      <Route path="create" element={<StaffsListPage />} />
      <Route path=":staffId" element={<StaffDetailsPage />} />
    </Routes>
  );
}

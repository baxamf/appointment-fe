import AdminStaffInfo from "../components/AdminStaffInfo";
import AdminStaffWorkingDays from "../components/AdminStaffWorkingDays";

export default function AdminStaffDetailsPage() {
  return (
    <div className="grid gap-[4vw]">
      <AdminStaffInfo />
      <AdminStaffWorkingDays />
    </div>
  );
}

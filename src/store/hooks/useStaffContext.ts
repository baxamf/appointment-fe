import { useContext } from "react";
import { StaffContext } from "../StaffProvider";

export const useStaffContext = () => ({ ...useContext(StaffContext) });

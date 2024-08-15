import React, { useState } from "react";
import dayjs from "dayjs";

export interface StaffStore {
  targetTime?: dayjs.Dayjs;
  workingDays: number[];
}

interface StaffContext {
  staffStore: StaffStore;
  setTargetTime: (targetTime: dayjs.Dayjs) => void;
  setWorkingDays: (workingDays: number[]) => void;
}

export const StaffContext = React.createContext<StaffContext>(null!);

export default function StaffProvider({ children }: { children: JSX.Element }) {
  const [staffStore, setStore] = useState<StaffStore>({
    targetTime: dayjs().startOf("day"),
    workingDays: [],
  });

  const setTargetTime = (targetTime: dayjs.Dayjs) => {
    setStore({ ...staffStore, targetTime });
  };

  const setWorkingDays = (workingDays: number[] = []) => {
    setStore({ ...staffStore, workingDays });
  };

  const staffContext: StaffContext = {
    setTargetTime,
    setWorkingDays,
    staffStore,
  };

  return (
    <StaffContext.Provider value={staffContext}>
      {children}
    </StaffContext.Provider>
  );
}

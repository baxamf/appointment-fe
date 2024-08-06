import React, { useState } from "react";

type AppointmentContext = {
  serviceId: number | null;
  staffWorkingDays: number[];
  setMainService: (serviceId: number) => void;
  setStaffWorkingDays: (workingDays: number[]) => void;
  resetMainService: () => void;
};

export const AppointmentContext = React.createContext<AppointmentContext>(
  null!
);

export default function AppointmentProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [serviceId, setServiceId] = useState<number | null>(null!);
  const [staffWorkingDays, setStaffWorkingDays] = useState<number[]>([]);

  const context = {
    serviceId,
    staffWorkingDays,
    setMainService: setServiceId,
    setStaffWorkingDays,
    resetMainService: () => setServiceId(null),
  };

  return (
    <AppointmentContext.Provider value={context}>
      {children}
    </AppointmentContext.Provider>
  );
}

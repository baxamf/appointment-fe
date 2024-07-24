import React, { useState } from "react";

type AppointmentContext = {
  serviceId: number | null;
  setService: (serviceId: number) => void;
  resetService: () => void;
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

  const context = {
    serviceId,
    setService: setServiceId,
    resetService: () => setServiceId(null),
  };

  return (
    <AppointmentContext.Provider value={context}>
      {children}
    </AppointmentContext.Provider>
  );
}

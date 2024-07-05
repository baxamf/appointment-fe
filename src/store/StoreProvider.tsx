import React, { useState } from "react";
import { StorageService } from "./StorageService";
import { UserRole } from "../common/types";

export type TUser = {
  role: UserRole;
};
export interface Store {
  user: TUser | null;
  settings?: string;
}

interface StoreContext {
  store: Store;
  setUser: (user: TUser) => void;
}
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidGVzdEBtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyMDA5OTg0NCwiZXhwIjoxNzIwMTg2MjQ0fQ.oA1JSEVeA7Yr8iLDfcxghpHCEI_LmQqJSdTZdNj2oi4";

export const StoreContext = React.createContext<StoreContext>(null!);

export default function StoreProvider({ children }: { children: JSX.Element }) {
  const user = StorageService.getUser();

  const [store, setStore] = useState<Store>({ user });

  const setUser = (user: TUser) => {
    localStorage.setItem("ACCESS_TOKEN", token);
    setStore({ ...store, user });
  };

  const storeContext = {
    setUser,
    store,
  };
  return (
    <StoreContext.Provider value={storeContext}>
      {children}
    </StoreContext.Provider>
  );
}

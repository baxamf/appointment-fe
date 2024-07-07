import React, { useState } from "react";
import { StorageService } from "./StorageService";
import { UserRole } from "../api/__generated__/graphql";

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

export const StoreContext = React.createContext<StoreContext>(null!);

export default function StoreProvider({ children }: { children: JSX.Element }) {
  const user = StorageService.getUser();

  const [store, setStore] = useState<Store>({ user });

  const setUser = (user: TUser) => {
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

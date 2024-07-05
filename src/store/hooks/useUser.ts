import { useContext } from "react";
import { StoreContext, TUser } from "../StoreProvider";

export const useUser = (): TUser | null => {
  const { store } = useContext(StoreContext);

  return store?.user;
};

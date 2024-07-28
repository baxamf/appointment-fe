import { useContext } from "react";
import { Store, StoreContext } from "../StoreProvider";

export const useUser = (): Store["user"] => {
  const { store } = useContext(StoreContext);

  return store?.user;
};

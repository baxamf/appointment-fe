import { useContext } from "react";
import { Store, StoreContext } from "../StoreProvider";

export const useStore = (): Store => {
  const { store } = useContext(StoreContext);

  return store;
};

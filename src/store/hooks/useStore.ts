import { useContext } from "react";
import { Store, StoreContext } from "../StoreProvider";

export const useStore = (): Store => useContext(StoreContext).store;

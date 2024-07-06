import { useContext } from "react";
import { StoreContext } from "../StoreProvider";

export const useSetUser = () => {
  const { setUser } = useContext(StoreContext);

  return setUser;
};

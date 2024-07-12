import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { RoutePaths } from "../../router/enums";

export function useSelectedNavKeys(keys: typeof RoutePaths) {
  const { pathname } = useLocation();
  const selectedKeys = useMemo(
    () => Object.values(keys).filter((key) => pathname.includes(key)),
    [pathname, keys]
  );

  return selectedKeys;
}

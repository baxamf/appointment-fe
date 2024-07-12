import { useLocation } from "react-router-dom";
import { RoutePaths } from "../../router/enums";

export default function useLocationBooleans() {
  const { pathname } = useLocation();

  return {
    isNotHome: pathname !== RoutePaths.HOME,
  };
}

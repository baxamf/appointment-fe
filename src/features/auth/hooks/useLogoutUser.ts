import { useLazyQuery } from "@apollo/client";
import { LOGOUT } from "../graphql";
import { StorageService } from "../../../store/StorageService";
import { useSetUser } from "../../../store/hooks/useSetUser";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../router/enums";

export function useLogoutUser() {
  const setUser = useSetUser();

  const navigate = useNavigate();

  const [logout, { loading }] = useLazyQuery(LOGOUT);

  const logoutUser = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    } finally {
      StorageService.removeAccessToken();

      setUser(null);

      navigate(RoutePaths.HOME);
    }
  };

  return { logoutUser, loading };
}

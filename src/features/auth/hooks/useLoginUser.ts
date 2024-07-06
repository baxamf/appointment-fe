import { useMutation } from "@apollo/client";
import { LoginInput, UserRole } from "../../../__generated__/graphql";
import { LOGIN, LoginResponse, LoginVariables } from "../graphql";
import { StorageService } from "../../../store/StorageService";
import { useSetUser } from "../../../store/hooks/useSetUser";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
  const setUser = useSetUser();
  const navigate = useNavigate();

  const [login, { loading: loginLoading, error: loginError }] = useMutation<
    LoginResponse,
    LoginVariables
  >(LOGIN, {
    onCompleted({ login }) {
      StorageService.setAccessToken(login.accessToken);

      switch (login.user.role) {
        case UserRole.Admin:
          navigate("/admin");
          break;
        case UserRole.Staff:
          navigate("/staff");
          break;
        default:
          navigate("/");
      }

      setUser(login.user);
    },
  });

  const loginUser = async (loginInput: LoginInput) => {
    await login({
      variables: { loginInput },
    });
  };

  return { loginUser, loginLoading, loginError };
};

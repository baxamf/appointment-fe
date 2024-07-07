import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql";
import { StorageService } from "../../../store/StorageService";
import { useSetUser } from "../../../store/hooks/useSetUser";
import { useNavigate } from "react-router-dom";
import { LoginInput, UserRole } from "../../../api/__generated__/graphql";

export const useLoginUser = () => {
  const setUser = useSetUser();
  const navigate = useNavigate();

  const [login, { loading: loginLoading, error: loginError }] = useMutation(
    LOGIN,
    {
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
    }
  );

  const loginUser = async (loginInput: LoginInput) => {
    await login({
      variables: { loginInput },
    });
  };

  return { loginUser, loginLoading, loginError };
};

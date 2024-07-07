import { gql } from "../../api/__generated__";
import { LoginInput, UserResponse } from "../../api/__generated__/graphql";

export type LoginResponse = {
  login: { accessToken: string; user: Pick<UserResponse, "role"> };
};
export type LoginVariables = { loginInput: LoginInput };

export const LOGIN = gql(`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      user {
        role
      }
    }
  }
`);

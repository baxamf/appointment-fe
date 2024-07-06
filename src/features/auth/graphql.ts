import { gql } from "@apollo/client";
import { LoginInput, UserResponse } from "../../__generated__/graphql";

export type LoginResponse = {
  login: { accessToken: string; user: Pick<UserResponse, "role"> };
};
export type LoginVariables = { loginInput: LoginInput };

export const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      user {
        role
      }
    }
  }
`;

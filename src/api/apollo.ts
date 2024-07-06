import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  HttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { StorageService } from "../store/StorageService";
import { gql } from "@apollo/client";
import { Auth } from "../__generated__/graphql";
import { GraphQLError } from "graphql";

export const GET_REFRESH = gql`
  query Refresh {
    refresh {
      accessToken
    }
  }
`;

const httpLink = new HttpLink({ uri: import.meta.env.VITE_API_URL });

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: StorageService.getBearerToken(),
  },
}));

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions.code) {
        case "UNAUTHENTICATED": {
          const token = StorageService.getAccessToken();

          if (!token) {
            window.location.replace("/login");
            break;
          }

          if (operation.operationName === "Refresh") return;

          const observable = new Observable<FetchResult>((observer) => {
            (async () => {
              try {
                await refreshToken();

                const subscriber = {
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                };

                forward(operation).subscribe(subscriber);
              } catch (err) {
                observer.error(err);
              }
            })();
          });

          return observable;
        }
      }
    }
  }
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

const refreshToken = async () => {
  try {
    const { data } = await apolloClient.query<Auth>({
      query: GET_REFRESH,
    });

    if (!data?.accessToken) {
      throw new GraphQLError("No access token");
    }

    StorageService.setAccessToken(data.accessToken);
  } catch (error) {
    StorageService.removeAccessToken();

    throw error;
  }
};

export default apolloClient;

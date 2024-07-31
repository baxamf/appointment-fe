import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StoreProvider from "./store/StoreProvider.tsx";
import apolloClient, { REFRESH } from "./api/apollo.ts";
import { ApolloProvider } from "@apollo/client";
import { StorageService } from "./store/StorageService.ts";

try {
  const { data } = await apolloClient.query({
    query: REFRESH,
    fetchPolicy: "no-cache",
  });

  StorageService.setAccessToken(data.refresh.accessToken);
} catch (error) {
  StorageService.removeAccessToken();
} finally {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StoreProvider from "./store/StoreProvider.tsx";
import apolloClient from "./api/apollo.ts";
import { ApolloProvider } from "@apollo/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>
);

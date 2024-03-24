"use client";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  DefaultOptions,
} from "@apollo/client";
const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // "https://store-cube.vercel.app/api/graphql".
  // "http://localhost:3000/api/graphql"

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_URL,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;

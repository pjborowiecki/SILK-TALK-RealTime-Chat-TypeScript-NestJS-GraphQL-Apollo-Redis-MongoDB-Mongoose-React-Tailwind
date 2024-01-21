import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
})

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import schema from './schema.json';

// Create and configure Apollo Client.
export const graphql = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(schema)
});

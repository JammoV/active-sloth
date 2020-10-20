import { ApolloClient, InMemoryCache } from '@apollo/client';
import constants from '../app/constants';

const client = new ApolloClient({
  uri: constants.graphqlEndpoint,
  cache: new InMemoryCache(),
});

export default client;

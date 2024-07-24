import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLinkHasura = new HttpLink({
  uri: "https://precise-herring-62.hasura.app/v1/graphql",
});

const httpLinkHygraph = new HttpLink({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluu29pkz000008l91dji8p5l/master",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const authLink = new ApolloLink((operation, forward) => {
  const { authToken } = operation.getContext();
  operation.setContext((context) => {
    const { headers } = context;
    if (authToken) {
      if (headers) {
        return {
          ...context,
          headers: {
            ...headers,
            authorization: `Bearer ${authToken}`,
          },
        };
      }
      return {
        ...context,
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      };
    }
    return context;
  });
  return forward(operation);
});

const additiveLinkHygraph = from([errorLink, httpLinkHygraph]);
const additiveLinkHasura = from([errorLink, authLink, httpLinkHasura]);

const directionalContentOrOtherLink = new ApolloLink.split(
  (operation) => operation.getContext().apiName === "hygraph",
  additiveLinkHygraph,
  additiveLinkHasura
);

const apolloClient = new ApolloClient({
  link: directionalContentOrOtherLink,
  cache: new InMemoryCache(),
});

export default apolloClient;

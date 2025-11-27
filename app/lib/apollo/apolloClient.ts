import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: '/api/graphql', // ora passa dal proxy Next.js
    }),
    cache: new InMemoryCache(),
});

export default apolloClient;

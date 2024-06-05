import { createContext } from "react";
import { ApolloClient, InMemoryCache, } from "../node_modules/@apollo/client/index";
export var ProgramContext = createContext({});
export var UserContext = createContext({});
export var apolloClient = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluu29pkz000008l91dji8p5l/master",
    cache: new InMemoryCache(),
});

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
const server = new ApolloServer({
  typeDefs,
  // resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 400 },
});

console.log("Server readt at port ", 4000);

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { games, authors, reviews } from "./data.js";

const resolvers = {
  Query: {
    games() {
      return games;
    },
    game(_, args) {
      return games.find((game) => game.id === args.id);
    },
    authors() {
      return authors;
    },
    author(_, args) {
      return authors.find((author) => author.id === args.id);
    },
    reviews() {
      return reviews;
    },
    review(_, args) {
      return reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return reviews.filter((r) => r.author_id === parent.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port ", 4000);

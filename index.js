const cors = require('micro-cors')(); // highlight-line
const { ApolloServer, gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!';
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.start().then(() => {
  const handler = apolloServer.createHandler(); // highlight-line
  return cors((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res)) // highlight-line
});

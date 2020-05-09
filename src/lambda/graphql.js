const { ApolloServer, gql } = require("apollo-server-lambda");

const MongoClient = require("mongodb").MongoClient;
const URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;
let cachedDb = null;

const database = () => {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }
  return MongoClient.connect(URI, { useNewUrlParser: true }).then(client => {
    cachedDb = client.db(DB_NAME);
    return cachedDb;
  });
};


const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers(database),
  introspection: true,
  playground: true
});

exports.handler = server.createHandler();
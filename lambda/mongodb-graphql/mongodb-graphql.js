const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const connectToMongoDB = require("./db");
require('encoding');
const URI = process.env.DB_URI;


const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

exports.handler = server.createHandler();


// exports.handler = async function(event, context) {
//   console.log(URI);
//   const db = await connectToMongoDB();
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers: resolvers(db),
//     context: ({ event, context }) => ({
//       headers: event.headers,
//       functionName: context.functionName,
//       event,
//       context,
//     }),
//     playground: {
//       endpoint: "/dev/graphql"
//     }
//   });
//   return server.createHandler();
  // return new Promise((yay, nay) => {
  //   const cb = (err, args) => (err ? nay(err) : yay(args));
  //   server.createHandler()(event, context, cb);
  // });
};

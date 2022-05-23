import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { readFile } from "fs/promises";
import { resolvers } from "./resolvers.js";

const schemaString = await readFile("./schema.graphql", "utf8");
const typeDefs = gql`
  ${schemaString}
`;

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

server
  .listen({ port: process.env.PORT || 4001 })
  .then(({ url }) =>
    console.log(`Approach 1 - Merchant Subgraph Server running at ${url}`)
  )
  .catch((err) => console.error(err));

import { ApolloServer } from "apollo-server-express";
import * as User from "./User";
import { makeSchema } from "nexus";
import { getContext, IContext } from "../context";

export const schema = makeSchema({
  types: [User],
});

export const gqlServer = new ApolloServer({
  schema,
  context: ({ req }): IContext => {
    return getContext(req);
  },
});

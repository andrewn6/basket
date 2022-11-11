import { ApolloServer } from "apollo-server-express";
import { makeSchema } from "nexus";
import { Context, getContext } from "../context";
import * as User from "./schema/User";
import * as Store from "./schema/Store";

export const schema = makeSchema({
  types: [User, Store],
});

export const gqlServer = new ApolloServer({
  schema,
  context: ({ req }): Context => {
    return getContext(req);
  },
  formatError: (error) => {
    return new Error("minor inconvenience");
  },
});

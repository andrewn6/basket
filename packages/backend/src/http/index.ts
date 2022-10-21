import express from "express";
import session from "express-session";
import { v4 } from "uuid";
import passport from "passport";
import { gqlServer } from "../graphql";
import { SESSION_SECRECT, PORT } from "../constant";
import { authRouter } from "./auth";

const app = express();
// store session in redis
app.use(
  session({
    name: "substore.id",
    genid: (_) => v4(),
    secret: SESSION_SECRECT,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      sameSite: "lax",
      // domain: "localhost",
      secure: false,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);

export const initServer = async () => {
  await gqlServer.start();
  gqlServer.applyMiddleware({ app });
  app.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
};

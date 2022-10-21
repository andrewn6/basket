import { mutationField, queryField, objectType } from "nexus";
import { User } from "nexus-prisma";
import { IContext } from "../context";

export const user = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id);
    t.field(User.name);
    t.field(User.email);
    t.field(User.github);
  },
});

export const currentUserQuery = queryField("getUser", {
  type: "User",
  resolve: (_, __, ctx: IContext) => ctx.req.user,
});

export const logoutMutation = mutationField("logout", {
  type: "Boolean",
  resolve: (_, __, ctx: IContext) => {
    ctx.req.logout((err) => {
      if (err) {
        console.error(err);
        return false;
      }
      return true;
    });
  },
});

import { prisma } from "./db";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export const getContext = (req: Request): IContext => {
  return {
    user: req.user,
    req: req,
    db: prisma,
  };
};

export interface IContext {
  user: Express.User | undefined;
  req: Request;
  db: PrismaClient;
}

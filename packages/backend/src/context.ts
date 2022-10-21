import { prisma } from "./db";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export const getContext = (req: Request): IContext => {
  return {
    req: req,
    db: prisma,
  };
};

export interface IContext {
  req: Request;
  db: PrismaClient;
}

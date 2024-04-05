import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import userRoutes from "./user";

export const routes = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  const user = userRoutes(dependencies);

  router.use("/user", user);

  return router;
};
  
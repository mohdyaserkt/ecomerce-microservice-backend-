import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import adminRoutes from "./admin";

export const routes = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  const admin = adminRoutes(dependencies);

  router.use("/admin", admin);

  return router;
};
  
import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import productRoutes from "./product";

export const routes = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  const product = productRoutes(dependencies);

  router.use("/product", product);

  return router;
};
  
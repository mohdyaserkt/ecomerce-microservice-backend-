import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import cartRoutes from "./cart";

export const routes = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  const cart = cartRoutes(dependencies);

  router.use("/cart", cart);

  return router;
};
  
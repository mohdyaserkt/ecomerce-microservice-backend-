import express from "express";
import { body, validationResult } from "express-validator";
import { BadRequestError, currentUser, requireAuth } from "@y48er-ecom/common";

import { cartController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { addToCartController,getCartController } =
  cartController(dependencies);

  router.get("/add/:id", addToCartController);
  router.get("/getcart", getCartController);
  
  

  return router;
};

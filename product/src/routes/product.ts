import express from "express";


import { productController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getAllProductsController,getSingleProductController } =
  productController(dependencies);

  router.get("/getallproducts", getAllProductsController);
  router.get("/getsingleproduct/:ProductId", getSingleProductController);
  
  

  return router;
};

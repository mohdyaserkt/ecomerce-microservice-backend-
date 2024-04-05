import express from "express";


import { adminController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { addProductController,deleteProductController,getProductsController,getUsersController } =
  adminController(dependencies);

  router.post("/addproduct", addProductController);
  router.get("/delete/:productId", deleteProductController);
  router.get("/getproducts", getProductsController);
  router.get("/getusers", getUsersController);
  
  

  return router;
};

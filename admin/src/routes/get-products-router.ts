import express, { Request, Response } from "express";
import { Product } from "../models/product";

const router = express.Router();

router.get("/admin/getproducts", async (req: Request, res: Response) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
});

export { router as getproductsrouter };

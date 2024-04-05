import express, { Request, Response } from "express";
import { Product } from "../models/product";
import { ProductCreatedPublisher } from "../events/publisher/product-created-event";
import { natsWrapper } from "../nats-wrapper";
import { randomBytes } from "crypto";


const router = express.Router();

router.post("/admin/addproduct", async (req: Request, res: Response) => {
  try {
    const { title, price } = req.body;
console.log("reached...");
    const productid=randomBytes(4).toString("hex")
    const product = Product.build({
      title,
      price,
    

    });

    await product.save();

    await new ProductCreatedPublisher(natsWrapper.client).publish({
      title: product.title,
      price: Number(product.price),
      id: product.id
    });

    res.json(product);
  } catch (error) {}
});

export { router as addproductrouter };

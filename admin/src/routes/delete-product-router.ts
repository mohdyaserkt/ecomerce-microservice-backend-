import express, { Request, Response } from "express";
import { Product } from "../models/product";
import { NotFoundError } from "@y48er-ecom/common";
import { natsWrapper } from "../nats-wrapper";
import { productdeletedpublisher } from "../events/publisher/product-deleted-event";

const router = express.Router();

router.get("/admin/delete/:productId",async(req: Request, res: Response) => {

    try {
        console.log("reached");
        
        const { productId } = req.params;
  
        const product = await Product.findByIdAndDelete(productId);
  
        if (!product) throw new NotFoundError();
  
        await new productdeletedpublisher(natsWrapper.client).publish({
          id: product.id,
          title: product.title,
          price: Number(product.price),
        });
  
        res.json({ message: "PRODUCT DELETED" });
      } catch (error) {
        res.status(500).json(error);
      }


})


export { router as deleteproductrouter };
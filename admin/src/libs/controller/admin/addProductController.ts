import dependencies from "../../../config/dependencies";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

import { BadRequestError } from "@y48er-ecom/common";
import { ProductCreatedPublisher } from "../../../events/publisher/product-created-event";
import { natsWrapper } from "../../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { productCreate_UseCase },
  } = dependencies;
  const addProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { title, price } = req.body;

      const addedProduct = await productCreate_UseCase(dependencies).execute({
        title,
        price,
      });

      if (!addedProduct)
        throw new BadRequestError("Invalid details are Provided");

      await new ProductCreatedPublisher(natsWrapper.client).publish({
        title: addedProduct.title,
        price: Number(addedProduct.price),
        id: addedProduct.id,
      });
      res.json(addedProduct);
    } catch (error) {
      console.log(error);
    }
  };
  return addProduct;
};

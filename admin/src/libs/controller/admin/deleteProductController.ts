import dependencies from "../../../config/dependencies";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

import { BadRequestError } from "@y48er-ecom/common";
import { productdeletedpublisher } from "../../../events/publisher/product-deleted-event";
import { natsWrapper } from "../../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { productDelete_UseCase },
  } = dependencies;
  const deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const { productId } = req.params;

      const deletedProduct = await productDelete_UseCase(dependencies).execute({
        productId
      });
console.log(deletedProduct);

    //   if (!deletedProduct)
    //     throw new BadRequestError("Invalid details are Provided");

        await new productdeletedpublisher(natsWrapper.client).publish({
            id: deletedProduct.id,
            title: deletedProduct.title,
            price: Number(deletedProduct.price),
          });
          res.json({ message: "PRODUCT DELETED" });
    } catch (error) {
      console.log(error);
    }
  };
  return deleteProduct;
};
 
import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@y48er-ecom/common";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleProduct_UseCase },
  } = dependencies;

  const getSingleProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const { ProductId } = req.params;
      const SingleProduct = await getSingleProduct_UseCase(dependencies).execute({
        ProductId,
      });

      if (!SingleProduct) {
        throw new BadRequestError("No such product found");
      }

      res.json(SingleProduct);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getSingleProduct;
};

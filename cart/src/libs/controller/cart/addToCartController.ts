import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@y48er-ecom/common";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { addToCart_UseCase },
  } = dependencies;

  const addToCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const email = req.session?.userDetails.email;
        const {id} = req.params;
      const cartAdded = await addToCart_UseCase(dependencies).execute({
        email,
        id
      });

      if (!cartAdded) {
        throw new BadRequestError("No such product found");
      }

      res.json({message:"added to cart"});
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return addToCart;
};

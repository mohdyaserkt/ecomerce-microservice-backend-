import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@y48er-ecom/common";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { addToCart_UseCase },
  } = dependencies;

  const getCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const email = req.session?.userDetails.email;
        
      const allCart = await addToCart_UseCase(dependencies).execute({
        email
        
      });

      if (!allCart) {
        throw new BadRequestError("No such product found");
      }

      res.json(allCart);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getCart;
};

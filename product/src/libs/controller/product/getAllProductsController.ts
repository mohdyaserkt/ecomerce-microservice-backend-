import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@y48er-ecom/common";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllProducts_UseCase },
  } = dependencies;

  const getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const AllProducts = await getAllProducts_UseCase(dependencies).execute();

      if (!AllProducts) {
        throw new BadRequestError("Products are empty");
      }

      res.json(AllProducts);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllProducts;
};

import dependencies from "../../../config/dependencies";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

import { BadRequestError } from "@y48er-ecom/common";

import { natsWrapper } from "../../../nats-wrapper";

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
      const allProducts = await getAllProducts_UseCase(dependencies).execute();

      if (!allProducts) throw new BadRequestError(" Products are empty");

      res.json(allProducts);
    } catch (error) {
      console.log(error);
    }
  };
  return getAllProducts;
};

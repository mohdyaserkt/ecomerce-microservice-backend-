import dependencies from "../../../config/dependencies";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

import { BadRequestError } from "@y48er-ecom/common";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getUsers_UseCase },
  } = dependencies;
  const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const allUsers = await getUsers_UseCase(dependencies).execute();

      if (!allUsers) throw new BadRequestError(" Products are empty");

      res.json(allUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return getAllUsers;
};

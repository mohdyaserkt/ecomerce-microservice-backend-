import express from "express";
import { body, validationResult } from "express-validator";
import { BadRequestError, currentUser, requireAuth } from "@y48er-ecom/common";

import { userController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getProfileController, loginController, signUpController } =
    userController(dependencies);

  router.get("/getprofile", getProfileController);
  router.post("/login", loginController);
  router.post("/signup", signUpController);
  

  return router;
};


import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { BadRequestError } from "@y48er-ecom/common";



export = (dependencies:DepenteniciesData):any =>{
   const {useCases:{
     loginProfile_UseCase
   }} = dependencies
   const loginUser = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const { email, password } = req.body;
        const userProfile = await loginProfile_UseCase(dependencies).execute({
           email,password
          });

          if (!userProfile) throw new BadRequestError("Invalid Credentials");

    
          req.session = {
            userDetails: userProfile,
          };
    
          res.json(userProfile);
      } catch (error) {
        console.log(error);
      }
   }
   return loginUser
}
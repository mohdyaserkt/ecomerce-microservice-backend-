import dependencies from "../../../config/dependencies";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

import { BadRequestError } from "@y48er-ecom/common";
import { UserCreatedPublisher } from "../../../events/publisher/UserCreatedEvent";
import { natsWrapper } from "../../../nats-wrapper";

export=(dependencies:DepenteniciesData):any =>{
   const {useCases:{
       createProfile_UseCase,getUser_UseCase
   }} = dependencies
   const signupUser = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const { email, password } = req.body;
        const isPresent = await getUser_UseCase(dependencies).execute({
            email
        })
        if (isPresent) {
            throw new Error("Email already present")
        }

        const userProfile = await createProfile_UseCase(dependencies).execute({
           email,password
        });
    

        if (!userProfile) throw new BadRequestError("Invalid Credentials are Provided");
        
        
    
        
        await new UserCreatedPublisher(natsWrapper.client).publish({
            userId: userProfile.id,
            email: userProfile.email,
          });
        res.json(userProfile);
      
    } catch (error) {
        console.log(error);
      }
   }
   return signupUser
}
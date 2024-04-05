import express, { Request, Response } from "express";
import { User } from "../models/users";


const router = express.Router();

router.get("/admin/getusers",async(req: Request, res: Response) => {

const allUsers = await User.find({});
  res.json(allUsers);
})


export { router as getusersrouter };







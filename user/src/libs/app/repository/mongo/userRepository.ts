import { schemas } from "../../database/mongo";

const { User } = schemas;

export const userRepository = {
  createUser: async (user: any) => {
    const mongooseObject = User.build(user);
    return await mongooseObject.save();
  },
  getUser:async(email:string)=>{
    const mongooseObject = await User.findOne({email})
    return mongooseObject
  },
  getUserProfile: async (id: string) => {
    const mongooseObject = await User.findById(id);
    return mongooseObject;
  },

  signInUser: async (user: any) => {
    const existingUser: any = await User.findOne({ email: user.email });

    if (existingUser) {
      const passwordsMatch = existingUser.password === user.password
      
      if (passwordsMatch) {
        return existingUser;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
};

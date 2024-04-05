import { schemas } from "../../database/mongo";

const { User } = schemas;

export const userRepository = {
  createUser: async (user: any) => {
    const mongooseObject = User.build(user);
    return await mongooseObject.save();
  },
};

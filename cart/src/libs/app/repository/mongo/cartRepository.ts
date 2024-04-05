import { schemas } from "../../database/mongo";

const { Cart } = schemas;

export const cartRepository = {
  addToCart: async ({email,id}: any) => {
   
    let userCart = await Cart.findOne({ email });

    if (!userCart) {
      userCart = Cart.build({
        email,
        cart: [],
      });
    }

    userCart.cart.push({ product: id });
    return await userCart.save();
  },
  getCart: async (email: string) => {
    const mongooseObject = await Cart.find({ email });
    return mongooseObject;
  },
};

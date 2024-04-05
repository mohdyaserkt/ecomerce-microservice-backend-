import { schemas } from "../../database/mongo";

const { Product } = schemas;

export const productRepository = {
  createProduct: async (product: any) => {
    const mongooseObject = Product.build(product);
    return await mongooseObject.save();
  },
  getProducts: async () => {
    const mongooseObject = await Product.find({});
    return mongooseObject;
  },
  deleteProduct: async (productId: string) => {
    const mongooseObject = await Product.findByIdAndDelete(productId);
    return mongooseObject;
  },
};

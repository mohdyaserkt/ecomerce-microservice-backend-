import { schemas } from "../../database/mongo";

const { Product } = schemas;

export const productRepository = {

  getAllProducts:async()=>{
    const mongooseObject = await Product.find({});
    return mongooseObject
  },
  getSingleProducts:async(id: string)=>{
    const mongooseObject = await Product.findById(id);
    return mongooseObject
  },
  addProduct:async(product: any)=>{
    const mongooseObject = Product.build(product);
    return await mongooseObject.save();
  },
  deleteProduct:async(id: string)=>{
    const mongooseObject = await Product.findByIdAndDelete(id);
    return mongooseObject
  },

};

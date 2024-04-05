import mongoose from "mongoose";


interface Product {
  title: string;
  price: number;
  
}

interface ProductModal extends mongoose.Model<ProductDoc> {
  build(attrs: Product): ProductDoc;
}

interface ProductDoc extends mongoose.Document {
  title: string
  price: number;
  
}

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);




productSchema.statics.build = (attrs: Product) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModal>("Product", productSchema);

export { Product };
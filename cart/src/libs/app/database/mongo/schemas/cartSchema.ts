import mongoose, { Document, Model, Types } from "mongoose";

interface Cart {
  email: string;
  cart: { product: string }[];
}

interface CartModel extends Model<CartDoc> {
  build(attrs: Cart): CartDoc;
}

interface CartDoc extends Document {
  email: string;
  cart: { product: string }[];
  _id: Types.ObjectId;
}

const cartSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    cart: [],
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

cartSchema.statics.build = (attrs: Cart) => {
  return new Cart(attrs);
};

const Cart = mongoose.model<CartDoc, CartModel>("Cart", cartSchema);

export { Cart };

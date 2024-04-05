import mongoose from "mongoose";

interface User {
  userId: string;
  email: string;
  
}

interface usermodel extends mongoose.Model<UserDoc> {
  build(attrs: User): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
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

userSchema.statics.build = (attrs: User) => {
  return new User({
    _id: attrs.userId,
    email: attrs.email,
  });
};

const User = mongoose.model<UserDoc, usermodel>("User", userSchema);

export { User };

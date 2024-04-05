import mongoose from "mongoose";

interface User {
 
  email: string;
  password: string;
}

interface usermodel extends mongoose.Model<UserDoc> {
  build(attrs: User): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password:string
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
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
    
    email: attrs.email,
    password:attrs.password
  });
};

const User = mongoose.model<UserDoc, usermodel>("User", userSchema);

export { User };

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI!
    );
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error:any) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export { connectDB };

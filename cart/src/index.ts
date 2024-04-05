import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { ProductCreatedListener } from "./events/listeners/product-created-listener";
import { ProductDeletedListener } from "./events/listeners/product-deleted-listener";
import { UserCreatedListener } from "./events/listeners/user-created-listener";
import { connectDB } from "./config/db";
import { intPort } from "./config/port";


const start = async () => {
  
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    

    await natsWrapper.connect("ecom", "128", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new ProductCreatedListener(natsWrapper.client).listen();
    new ProductDeletedListener(natsWrapper.client).listen();
    new UserCreatedListener(natsWrapper.client).listen();

    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(intPort, () => {
    console.log("Listening on port 4000 ");
  });
};

start();

















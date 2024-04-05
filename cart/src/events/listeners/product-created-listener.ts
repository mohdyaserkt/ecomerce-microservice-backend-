import { Message } from "node-nats-streaming";
import { Subject, listener, productcreatedevent } from "@y48er-ecom/common";

;
import { natsWrapper } from "../../nats-wrapper";
import { productCreated_UseCase } from "../../libs/usecases";
import dependencies from "../../config/dependencies";

export class ProductCreatedListener extends listener<productcreatedevent> {
  
  subject: Subject.ProductCreated = Subject.ProductCreated;
  queueGroup = "queueGroupNamecart";

  async onMessage(data: productcreatedevent["data"], msg: Message) {
    const { price, title,id} = data;

    try {
      await productCreated_UseCase(dependencies).execute({
        id,
        title,
        price,
      });
      msg.ack();
    } catch (error) {
      console.log(error);
    }
  }
}

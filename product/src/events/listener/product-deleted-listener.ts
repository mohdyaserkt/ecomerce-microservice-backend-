import { Message } from "node-nats-streaming";
import { Subject, listener, productdeletedevent } from "@y48er-ecom/common";


import { natsWrapper } from "../../nats-wrapper";
import { productDeleted_UseCase } from "../../libs/usecases";
import dependencies from "../../config/dependencies";

export class ProductDeletedListener extends listener<productdeletedevent> {
  subject: Subject.ProductDeleted = Subject.ProductDeleted;
  queueGroup = "queueGroupNameProduct";

  async onMessage(data: productdeletedevent["data"], msg: Message) {
    const { id, price, title } = data;

    try {
      await productDeleted_UseCase(dependencies).execute({
        ProductId:id
      })
      console.log("product deleted");
      msg.ack();
    } catch (error) {
      console.log(error);
    }
  }
}

import { Message } from "node-nats-streaming";
import { Subject, listener, usercreatedevent } from "@y48er-ecom/common";


import { createProfile_UseCase } from "../../libs/usecases";
import dependencies from "../../config/dependencies";

export class UserCreatedListener extends listener<usercreatedevent> {
  subject: Subject.UserCreated = Subject.UserCreated;
  queueGroup = "queueGroupNamecart";

  async onMessage(data: usercreatedevent["data"], msg: Message) {
    const { email, userId } = data;

    try {
      await createProfile_UseCase(dependencies).execute({
        email,
        userId,
      });

      
      msg.ack();
    } catch (error) {
      console.log(error);
    }
  }
}

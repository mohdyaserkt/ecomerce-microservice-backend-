import { Publisher, Subject,usercreatedevent} from "@y48er-ecom/common";

export class UserCreatedPublisher extends Publisher<usercreatedevent> {
  subject: Subject.UserCreated = Subject.UserCreated;
}

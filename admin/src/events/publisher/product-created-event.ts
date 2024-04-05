import { Publisher, Subject,productcreatedevent} from "@y48er-ecom/common";

export class ProductCreatedPublisher extends Publisher<productcreatedevent> {
  subject: Subject.ProductCreated = Subject.ProductCreated;
}

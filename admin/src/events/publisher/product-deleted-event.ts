import { Publisher, Subject,productdeletedevent} from "@y48er-ecom/common";

export class productdeletedpublisher extends Publisher<productdeletedevent> {
  subject: Subject.ProductDeleted = Subject.ProductDeleted;
}

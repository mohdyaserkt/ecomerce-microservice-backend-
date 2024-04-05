import  {productRepository} from "../libs/app/repository/mongo";
import {
    getAllProducts_UseCase,
    getSingleProduct_UseCase,
    productCreated_UseCase,
    productDeleted_UseCase
    


} from "../libs/usecases";

const useCases = {
    getAllProducts_UseCase,
    getSingleProduct_UseCase,
    productCreated_UseCase,
    productDeleted_UseCase
};

const repository = {
    productRepository,
};

export = {
  useCases,
  repository,
};

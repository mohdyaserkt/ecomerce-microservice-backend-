import {
  cartRepository,
  productRepository,
  userRepository,
} from "../libs/app/repository/mongo";

import {
  productCreated_UseCase,
  productDeleted_UseCase,
  addToCart_UseCase,
  createProfile_UseCase,
  getCart_UseCase,
} from "../libs/usecases";

const useCases = {
  productCreated_UseCase,
  productDeleted_UseCase,
  addToCart_UseCase,
  getCart_UseCase,
  createProfile_UseCase,
};

const repository = {
  productRepository,
  cartRepository,
  userRepository,
};

export = {
  useCases,
  repository,
};

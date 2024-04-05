import { productRepository, userRepository } from "../libs/app/repository/mongo";

import {
  createProfile_UseCase,
  productCreate_UseCase,
  getUsers_UseCase,
  productDelete_UseCase,
  getAllProducts_UseCase
} from "../libs/usecases";

const useCases = {
  createProfile_UseCase,
  productCreate_UseCase,
  getUsers_UseCase,
  productDelete_UseCase,
  getAllProducts_UseCase
};

const repository = {
  userRepository,
  productRepository
};

export = {
  useCases,
  repository,
};

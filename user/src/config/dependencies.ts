import  {userRepository} from "../libs/app/repository/mongo";
import {
  createProfile_UseCase,
  getUserProfile_UseCase,
  getUser_UseCase,
  loginProfile_UseCase,
} from "../libs/usecases";

const useCases = {
  createProfile_UseCase,
  getUserProfile_UseCase,
  getUser_UseCase,
  loginProfile_UseCase,
};

const repository = {
  userRepository,
};

export = {
  useCases,
  repository,
};

import { DepenteniciesData } from "../../entities/interfaces";

export const getUsers_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = () => {
    return userRepository.getUsers();
  };
  return {
    execute,
  };
};

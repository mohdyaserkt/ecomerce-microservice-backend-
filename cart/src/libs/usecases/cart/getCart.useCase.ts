
import { DepenteniciesData } from "../../entities/interfaces";

export const getCart_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { cartRepository },
  } = dependencies;

  if (!cartRepository)
    throw new Error("The cart repository should be dependencie");

  const execute = ({ email }: { email: string } ) => {
    
    return cartRepository.getCart(email);
  };
  return {
    execute,
  };
};

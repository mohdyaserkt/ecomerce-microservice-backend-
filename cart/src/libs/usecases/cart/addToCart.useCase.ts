import { CartData,CartSructure } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const addToCart_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { cartRepository },
  } = dependencies;

  if (!cartRepository)
    throw new Error("The cart repository should be dependencie");

  const execute = ({ email, id }: CartData) => {
    const CartDatas = new CartSructure({
      email,
      id,
    });
    return cartRepository.addToCart(CartDatas);
  };
  return {
    execute,
  };
};

import addToCartController from "./addToCartController";
import getCartController from "./getCartController";

export = (dependencies: any) => {
  return {
    addToCartController: addToCartController(dependencies),
    getCartController: getCartController(dependencies),
  };
};

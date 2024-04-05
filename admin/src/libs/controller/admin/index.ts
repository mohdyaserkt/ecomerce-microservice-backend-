import addProductController from "./addProductController";
import deleteProductController from './deleteProductController'
import getProductsController from './getProductsController'
import getUsersController from'./getUsersController'


export = (dependencies: any) => {
  return {
    addProductController: addProductController(dependencies),
    deleteProductController: deleteProductController(dependencies),
    getProductsController:getProductsController(dependencies),
    getUsersController:getUsersController(dependencies)
  };
};

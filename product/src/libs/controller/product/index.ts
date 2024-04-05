import getAllProductsController from "./getAllProductsController";
import getSingleProductController from './getSingleProductController'



export = (dependencies: any) => {
  return {
    getAllProductsController: getAllProductsController(dependencies),
    getSingleProductController: getSingleProductController(dependencies),
    
    
  };
};

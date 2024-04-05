import getProfileController from "./getProfileController";
import loginController from './loginController'
import signupController from './signupController'


export = (dependencies: any) => {
  return {
    getProfileController: getProfileController(dependencies),
    loginController: loginController(dependencies),
    signUpController:signupController(dependencies),
    
  };
};

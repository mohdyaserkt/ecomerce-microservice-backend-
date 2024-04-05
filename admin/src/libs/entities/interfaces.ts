export interface DepenteniciesData {
    useCases: useCaseData;
    repository: repositoryData;
  }
  
  export interface repositoryData {
    userRepository: any;
    productRepository:any;
  }
  
  export interface useCaseData {
    createProfile_UseCase: any;
    productCreate_UseCase: any;
    getUsers_UseCase:any;
    productDelete_UseCase:any;
    getAllProducts_UseCase:any;
  }
  

  
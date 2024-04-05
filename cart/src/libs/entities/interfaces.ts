export interface DepenteniciesData {
    useCases: useCaseData;
    repository: repositoryData;
  }
  
  export interface repositoryData {
    productRepository: any;
    cartRepository:any;
    userRepository:any;
  }
  
  export interface useCaseData {
    
    productCreated_UseCase:any;
    productDeleted_UseCase:any;
    createProfile_UseCase:any;
    addToCart_UseCase:any;
    getCart_UseCase:any;

  }
  
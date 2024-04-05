export interface DepenteniciesData {
    useCases: useCaseData;
    repository: repositoryData;
  }
  
  export interface repositoryData {
    productRepository: any;
  }
  
  export interface useCaseData {
    getAllProducts_UseCase: any;
    getSingleProduct_UseCase:any;
    productCreated_UseCase:any;
    productDeleted_UseCase:any;
  }
  
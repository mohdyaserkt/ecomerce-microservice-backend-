export interface DepenteniciesData {
    useCases: useCaseData;
    repository: repositoryData;
  }
  
  export interface repositoryData {
    userRepository: any;
  }
  
  export interface useCaseData {
    createProfile_UseCase: any;
    getUserProfile_UseCase: any;
    getUser_UseCase:any,
    loginProfile_UseCase:any
  }
  
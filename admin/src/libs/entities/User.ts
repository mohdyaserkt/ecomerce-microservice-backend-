export interface UserData {
    email:string
    userId:string
  }
  
  export class UserProfile {
    email: string;
    userId:string
  
    constructor({ email,userId}: UserData) {
      this.email = email;
      this.userId=userId
    }
  }
  

  
export interface CartData {
    email:string
    id:string
  }
  
  export class CartSructure {
    email: string;
    id:string
  
    constructor({ email,id}: CartData) {
      this.email = email;
      this.id=id
    }
  }
  

  
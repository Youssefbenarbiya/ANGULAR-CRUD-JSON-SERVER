export class joueur{
    id?: number;
    email?:string;
    nom?:string;
    Prenom?:string;
    Nationalite?:string;
    Numero?:string;
    Position?:string;
    
}
export class signup {
    nom?:string;
    email?:string;
    password?:string;
}
export class login {
    find(arg0: (a: any) => boolean) {
      throw new Error('Method not implemented.');
    }
    email?:string;
    password?:string;
}

export class contactezNous {
  nom?:string;
  email?:string;
  message?:string;
  id:number | undefined;
}
export class adminSignup{
  find(arg0: (a: any) => void) {
    throw new Error('Method not implemented.');
  }
  nom?:string;
  email?:string;
  password?:string;
}
export class adminLogin{
  email?:string;
  nom?:string;
}
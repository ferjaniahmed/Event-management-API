import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }


  login(data  : any){
    return `${data.name} is sign in`;
  }


  getProfile(){
    return "profile";
  }
}

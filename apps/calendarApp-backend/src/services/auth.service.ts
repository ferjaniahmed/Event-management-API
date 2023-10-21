import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";


@Injectable()
export class AuthService{

    constructor(
        @Inject('AUTH_SERVICE') private client: ClientProxy
      ){}
    login(data : any){
        return this.client.send({cmd : "login"} , data)
      }
      getProfile(){
    
      }
}
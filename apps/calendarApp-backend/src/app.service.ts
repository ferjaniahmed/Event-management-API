import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private client: ClientProxy
  ){}

  
  //FOR TEST
  getHello() {
    return this.client.send({cmd : "sum"} , [1, 2, 3]);
  }

  login(data : any){
    return this.client.send({cmd : "login"} , data)
  }
  getProfile(){

  }

}

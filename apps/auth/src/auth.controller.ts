import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices/decorators';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //for test
  @MessagePattern({cmd : "sum"})
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b)=>a+b);
  }
  @MessagePattern({cmd : "login"})
  login(data : any){
    return this.authService.login(data)
  }

  @MessagePattern({cmd : "getProfile"})
  getProfile(){
    return this.authService.getProfile()
  }
}

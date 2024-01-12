import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices/decorators';
import { AuthDto } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';



@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @MessagePattern({cmd : "login"})
  @Post("login")
  login(@Body() data : AuthDto){
    return this.authService.login(data)
  }

  @MessagePattern({cmd : "getProfile"})
  @Get('profile')
  @UseGuards(AuthGuard("jwt"))
  getProfile(@Req() request){
    return request.user;
  }
}

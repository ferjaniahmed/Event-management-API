import { Body, Controller , Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";


@Controller("auth")
export class AuthController{
    constructor(private authService : AuthService){}
    @Post("login")
    login(@Body() user : Record<string , any>){
      return this.authService.login(user)
    }
}
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from './users/user.service';
import { AuthDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  

  constructor(private usersService : UserService , private jwtService : JwtService){}


  async login(data  : AuthDto){
    try{
      const user = await this.usersService.verifyUser(data.email , data.password)
      if(!user){
        throw new HttpException("Your login information is invalid." , HttpStatus.BAD_REQUEST)
      }
      const payload = {id : user._id , email : user.email  }
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }catch(e){
      throw new HttpException("Your login information is invalid." , HttpStatus.BAD_REQUEST , {cause :e})
    }
 }

}

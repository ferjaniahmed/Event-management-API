import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(/* call user service here */) {
    super();
  }

  async validate(email: string, password: string) {

    //check if user exist or no
    /*try {
      return this.userService.verifyUser(email, password);
    } catch (err) {
      throw new UnauthorizedException(err);
    }*/
  }
}
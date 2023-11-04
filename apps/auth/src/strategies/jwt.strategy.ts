import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //secrest key here
      secretOrKey:"123456789",
    });
  }

  async validate(payload) {
    const { id } = payload;
    //find and return user extracted from the token

    /*const user = await this.userModel.findById(id);

    if (!user) {
      throw new UnauthorizedException('need login to access at this endpoint');
    }
    return user;*/
  }
}

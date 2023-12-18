import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './users/user.module';

@Module({
  imports: [JwtModule.register({
    global: true,
    //secret key
    secret: "123456789",
    signOptions: { expiresIn: '3600s' },
  }),UserModule],
  controllers: [AuthController],
  providers: [AuthService,],
})
export class AuthModule {}

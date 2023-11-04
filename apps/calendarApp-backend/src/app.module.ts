import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'AUTH_SERVICE',
        transport: Transport.TCP , 
        options :{
          host : "127.0.0.1",
          port : 8000, 
        }
    },
    ]),
  ],
  controllers: [AppController,AuthController],
  providers: [AppService , AuthService],
})
export class AppModule {}

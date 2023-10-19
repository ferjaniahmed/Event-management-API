import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

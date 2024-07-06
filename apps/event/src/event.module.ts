import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { DatabaseModule, EventSchema } from '@app/common';
import { SharedModule } from '@app/common/shares';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{
      name : "AUTH_SERVICE",
      transport : Transport.TCP ,
      options : {
        port  : 8000,
        host : "127.0.0.1",
      }
    }]),
    SharedModule.register([
      {name : "Events" , schema : EventSchema}
    ]) ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}

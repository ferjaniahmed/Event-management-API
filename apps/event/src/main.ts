import { NestFactory } from '@nestjs/core';
import { EventModule } from './event.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(EventModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8080,
    },
  });
  await app.startAllMicroservices();
  await app.listen(8080 , ()=> console.log("microservice listen at port 8080"));

}
bootstrap();

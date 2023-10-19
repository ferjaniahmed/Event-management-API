import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8000,
    },
  });
  await app.startAllMicroservices();
  await app.listen(8000 , ()=> console.log("microservice listen at port 8000"));
}
bootstrap();

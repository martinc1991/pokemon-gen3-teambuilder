import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TrpcRouter } from './providers/trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const trpc = app.get(TrpcRouter);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();
  trpc.applyMiddleware(app);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();

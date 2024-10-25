import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: process.env.FRONTEND_URL,
  });
  await app.listen(8001, () => {
    console.log('main is running on PORT 8001');
  });
}
bootstrap();

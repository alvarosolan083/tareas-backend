import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173', // Desarrollo local
      'https://tareas-frontend-dusky.vercel.app' // Producción Vercel
    ],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();

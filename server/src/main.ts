import {AppModule} from './app/app.module';
import {NestFactory} from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    credentials:true,
    origin:'http://localhost:5173'
  })
  app.use(cookieParser());

  await app.listen(4000);
}

bootstrap().then((r) => console.log('app bootstraped'));

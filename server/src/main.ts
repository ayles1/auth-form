import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = ['http://localhost:3000', 'http://localhost:5173'];
  app.enableCors({
    credentials: true,
    origin: 'http://localhost:5173',
    // origin: function (origin, callback) {
    //   if (!origin || whitelist.indexOf(origin) !== -1) {
    //     callback(null, true);
    //   } else {
    //     callback(new Error('Not allowed by CORS'));
    //   }
    // },
  });
  app.setGlobalPrefix('api');
  app.use(cookieParser());

  await app.listen(4000);
}

bootstrap().then((r) => console.log('app bootstraped'));

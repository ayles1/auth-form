import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {UserModule} from '../user/user.module'
import {AuthModule} from '../auth/auth.module'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypegooseModule} from 'nestjs-typegoose'
import {getMongoConfig} from '../config/mongo.config'

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
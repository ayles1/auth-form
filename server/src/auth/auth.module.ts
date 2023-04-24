import {Module} from '@nestjs/common'
import {AuthService} from './services/auth.service'
import {AuthController} from './auth.controller'
import {TypegooseModule} from 'nestjs-typegoose'
import {UserModel} from '../user/user.model'
import {ConfigModule, ConfigService,} from '@nestjs/config'
import {JwtModule} from '@nestjs/jwt'
import {getJWTConfig} from '../config/jwt.config'
import {MailService} from "./services/mail.service";
import {TokenService} from "./services/token.service";
import {TokenModel} from "./token.model";
import {MailerModule} from '@nestjs-modules/mailer'

@Module({
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        MailService,
        TokenService,
    ],
    imports: [
        ConfigModule,
        MailerModule.forRootAsync(
            {
                imports: [ConfigModule],
                useFactory: (config: ConfigService) => ({
                    transport: {
                        host: config.get('SMTP_HOST'),
                        port: config.get<number>("SMTP_PORT") ,
                        secure: true,

                        auth: {
                            user: config.get("SMTP_USER"),
                            pass: config.get("SMTP_PASSWORD")
                        }
                    },

                }),
                inject: [ConfigService]
            }
        ),

        TypegooseModule.forFeature(
            [
                {
                    typegooseClass: UserModel,
                    schemaOptions: {
                        collection: 'User'
                    }
                },
                {
                    typegooseClass: TokenModel,
                    schemaOptions: {
                        collection: "Token"
                    }
                }
            ]
        ),

        JwtModule.registerAsync(
            {
                imports: [
                    ConfigModule
                ],
                inject: [
                    ConfigService
                ],
                useFactory: getJWTConfig
            }
        )
    ]
})
export class AuthModule {
}

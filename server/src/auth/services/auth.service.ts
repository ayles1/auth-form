import {BadRequestException, Inject, Injectable, UnauthorizedException} from '@nestjs/common'
import {InjectModel} from 'nestjs-typegoose'
import {UserModel} from '../../user/user.model'
import {AuthDto} from '../auth.dto'
import {ModelType} from '@typegoose/typegoose/lib/types'
import {compare, genSalt, hash} from 'bcryptjs'
import {MailService} from "./mail.service";
import {TokenService} from "./token.service";
import {ConfigService} from "@nestjs/config";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
        @Inject(MailService) private readonly MailService: MailService,
        @Inject(TokenService) private readonly TokenService: TokenService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
    ) {
    }

    async login(dto: AuthDto) {

        const user = await this.validateUser(dto)
        if (!user.isActivated) {
            throw new UnauthorizedException('Неверный пароль или неподтвержденный аккаунт')
        }
        const tokens = this.TokenService.generateTokens({email: user.email, id: user.id, isActivated: user.isActivated})
        await this.TokenService.saveToken(user._id, tokens.refreshToken)
        return {
            ...tokens,
            user: {
                email: user.email,
                id: user._id,
                isActivated: user.isActivated
            }
        }
    }

    async register(dto: AuthDto) {
        const oldUser = await this.userModel.findOne({email: dto.email})
        if (oldUser)
            throw new BadRequestException('User with this email is already exist')

        const salt = await genSalt(10)
        const activationLink = this._generateRandomString(10)

        const newUser = new this.userModel({
            email: dto.email,
            password: await hash(dto.password, salt),
            activationLink: activationLink,

        })
        await this.MailService.sendActivationMail(dto.email, `${this.configService.get('API_URL')}/api/auth/activate/${activationLink}`)
        const user = await newUser.save()

        const tokens = this.TokenService.generateTokens({email: dto.email, id: user.id, isActivated: user.isActivated})
        await this.TokenService.saveToken(user._id, tokens.refreshToken)

        return {
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.isActivated,

            },
            ...tokens
        }
    }

    async logout(refreshToken: string) {
        const token = await this.TokenService.removeToken(refreshToken)
        return token

    }

    private _generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async activate(activationLink: string) {
        const user = await this.userModel.findOne({activationLink})
        if (!user) {
            throw new BadRequestException('Некорректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }

    async refresh(refreshToken: string) {
        const userData = this.TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await this.TokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw new UnauthorizedException('')
        }

        const user = await this.userModel.findById(userData.id)
        const userInfo = {email: user.email, id: user.id, isActivated: user.isActivated}

        const tokens = this.TokenService.generateTokens(userInfo)
        await this.TokenService.saveToken(userInfo.id, tokens.refreshToken)
        return {...tokens, user: userInfo}
    }


    async validateUser(dto: AuthDto): Promise<UserModel> {
        const user = await this.userModel.findOne({email: dto.email})
        if (!user) throw new UnauthorizedException('User not found')

        const isValidPassword = await compare(dto.password, user.password)
        if (!isValidPassword)
            throw new UnauthorizedException('Password is incorrect')

        return user
    }
}

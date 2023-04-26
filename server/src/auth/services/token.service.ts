import {JwtService} from "@nestjs/jwt";
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {TokenModel} from "../token.model";
import {Types} from "mongoose";
import {UserModel} from "../../user/user.model";

@Injectable()
export class TokenService {
    constructor(
        @InjectModel(TokenModel) private readonly tokenModel: ModelType<TokenModel>,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService) {
    }

    generateTokens(payload:Pick<UserModel, 'email'| 'id' | 'isActivated'>) {
        
        const accessToken = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_ACCESS_SECRET'),
            expiresIn: '15m'
        })
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: '30d'
        })
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId:Types.ObjectId, refreshToken:string) {
        const tokenData = await this.tokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return await tokenData.save()
        }
        const newToken = new this.tokenModel({user:userId,refreshToken})
        return await newToken.save()
    }
    async removeToken(refreshToken:string){
        const token = await this.tokenModel.deleteOne({refreshToken});
        return token
    }
    async findToken(refreshToken:string){
        const token = await this.tokenModel.findOne({refreshToken});
        return token
    }
     validateAccessToken(token:string){
        try {
            const userData = this.jwtService.verify(token,this.configService.get('JWT_ACCESS_SECRET'))
            return userData
        }
        catch(e){
            return null

        }
    }
     validateRefreshToken(token:string):UserModel{
        try {
         const userData = this.jwtService.verify(token, {secret: this.configService.get('JWT_REFRESH_SECRET')})
            return userData
        }
        catch(e){
            return null
        }
    }
}

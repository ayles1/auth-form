import {Body, Controller, Get, HttpCode, Param, Post, Res, UsePipes, ValidationPipe} from '@nestjs/common'
import {AuthService} from './services/auth.service'
import {AuthDto} from './auth.dto'
import {Response} from "express";
import {ConfigService} from "@nestjs/config";
import {Cookies} from "./decorators/cookies.decorator";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
                private readonly configService: ConfigService,
    ) {
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto, @Res() res: Response) {
        const userData = await this.authService.login(dto)
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('register')
    async register(@Res() response: Response, @Body() dto: AuthDto) {
        const userData = await this.authService.register(dto)
        response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return response.json(userData)

    }

    @HttpCode(200)
    @Post('logout')
    async logout(@Cookies('refreshToken')refreshToken:string,@Res() res:Response) {
        const token = await this.authService.logout(refreshToken)
        res.clearCookie('refreshToken')
        console.log(refreshToken);
        return res.json(token)
    }

    @HttpCode(200)
    @Get('activate/:link')
    async activate(@Param('link') link: string, @Res() res: Response) {
        try {
            await this.authService.activate(link)
            return res.redirect(`${this.configService.get('CLIENT_URL')}/activate/${link}`)

        } catch (e) {
            console.log(e.message)
        }
    }

    @HttpCode(200)
    @Post('refresh')
    async refreshToken(@Cookies('refreshToken') refreshToken :string,@Res() response:Response ) {
        const userData = await this.authService.refresh(refreshToken)
        response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

        return response.json(userData)
    }

}

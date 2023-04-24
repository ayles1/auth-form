import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {MailerService} from "@nestjs-modules/mailer";


@Injectable()
export class MailService {

    constructor(
        private readonly configService: ConfigService,
        private readonly mailerService: MailerService
    ) {}

    async sendActivationMail(to: string, link: string) {
        await this.mailerService
            .sendMail({

                from: this.configService.get('SMTP_USER'),
                to,
                subject: `Активация аккаунта на ${this.configService.get('API_URL')}`,
                html:
                    `
            <div>
            <h1>Для активации перейдите по ссылке</h1>
            <a href=${link}>${link}</a>
            </div>
            `
            })
    }
}

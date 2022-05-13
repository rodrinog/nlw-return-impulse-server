import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d2f512b458daa4",
        pass: "ae04adad89c9fc"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feddget <oi@feedget.com>',
            to: 'Administrador <admin@feedget.com>',
            subject,
            html: body,
        });
    }
}
import nodemailer from 'nodemailer';
import { logger } from '../utils';

import Config from '../utils/config';

//! SMTP needs to be configured correctly in order to be able to send emails.
// Here outlook is used for author's convenience but you may use gmail for example. Please refer online for how to connect to your email provider's SMTP servers.
const smtpConfig = {
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: Config.SENDER_EMAIL,
    pass: Config.SENDER_PASSWORD
  }
};

const transporter = nodemailer.createTransport(smtpConfig);

const mailOptions = (subject: string = 'Issue Summary', payload: string) => {
  return {
    from: Config.SENDER_EMAIL,
    to: Config.RECEIVER_EMAIL,
    subject: subject,
    html: payload
  };
};

const emailService = (payload: string, subject?: string) => {
  transporter.sendMail(mailOptions(subject, payload), (error, info) => {
    if (error) logger.error((error as any).message);
    else logger.info(`Email sent: ${info.response}`);
  });
};

export default emailService;

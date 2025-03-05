import { NextApiRequest, NextApiResponse } from 'next/dist/shared/lib/utils';
import nodemailer from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "edelweissquartett@gmail.com",
                pass: "adox nzdt aiku tbsz",
            },
        });

        const mailOptions = {
            from: "edelweissquartett@gmail.com",
            to: "edelweissquartett@gmail.com",
            subject: `New message from ${email}`,
            text: `Name: ${name}\n\nMessage: ${message}`,
        };

        try {
            transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' + error });
        }
    } else {
        console.error('Method Not Allowed');
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
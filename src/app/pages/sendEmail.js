import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, subject, message } = req.body;

        // Create a Nodemailer transporter
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
            subject: subject,
            text: `Name: ${name}\n\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error sending email' + error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

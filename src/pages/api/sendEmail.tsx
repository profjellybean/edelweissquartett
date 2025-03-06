import type { NextApiRequest, NextApiResponse } from 'next';
import FormData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailgun = new Mailgun(FormData);
    const key = process.env.MAILGUN_API_KEY;
    const client = process.env.MAILGUN_DOMAIN as string;
    const mainEmail = process.env.RECIPIENT_EMAIL as string;

    if (!key) {
        return res.status(500).json({ error: 'Mailgun API key is not configured' });
    }

    try {
        console.log("Initializing Mailgun client");
        const mg = mailgun.client({
            username: "api",
            key: key,
        });
        console.log("Mailgun client initialized");

        const data = await mg.messages.create(client, {
            from: mainEmail,
            to: mainEmail,
            subject: "New Mail from: " + name + " <" + email + ">",
            text: message,
        });

        console.log("Mailgun response:", data);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error("Mailgun error:", error);
        res.status(500).json({
            error: 'Error sending email',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
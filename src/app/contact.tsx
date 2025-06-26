"use client";
import { useState } from "react";
import { useLanguage } from './languageContext';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitStatus, setSubmitStatus] = useState({
        success: false,
        error: false,
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({
            success: false,
            error: false,
            message: '',
        });

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormData({ name: '', email: '', message: '' });
                setSubmitStatus({
                    success: true,
                    error: false,
                    message: t("contact.form.success"),
                });
            } else {
                setSubmitStatus({
                    success: false,
                    error: true,
                    message: t("contact.form.error"),
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus({
                success: false,
                error: true,
                message: t("contact.form.error"),
            });
        } finally {
            setIsSubmitting(false);
            // Auto-hide success message after 5 seconds
            if (submitStatus.success) {
                setTimeout(() => {
                    setSubmitStatus({
                        success: false,
                        error: false,
                        message: '',
                    });
                }, 5000);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-5xl font-bold flex-col mb-15">{t("contact.title")}</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
                <div className="text-lg flex-1 lg:m-6 md:m-6 md:p-6 lg:p-6 flex flex-col md:items-start gap-4">
                    {/* Email with icon */}
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        <a href="mailto:edelweissquartett@gmail.com" className="text-blue-600">edelweissquartett@gmail.com</a>
                    </div>
                    
                    {/* Instagram with icon */}
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                        <a href="https://www.instagram.com/edelweissquartett" target="_blank" rel="noopener noreferrer" className="text-blue-600">@edelweissquartett</a>
                    </div>

                     {/* Facebook with icon */}
                     <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                        <a href="https://www.facebook.com/profile.php?id=61573836786722" target="_blank" rel="noopener noreferrer" className="text-blue-600">Edelweiß Quartett</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
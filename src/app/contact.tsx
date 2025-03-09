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

                <div className="hidden md:flex w-[1px] bg-black h-auto self-stretch"></div>
                <div className="lg:hidden md:hidden">{t("or")}</div>

                <form onSubmit={handleSubmit} className="p-6 lg:m-6 md:m-6 rounded-xl shadow-lg bg-white flex-1 w-full  lg:w-lg">
                    <h2 className="text-2xl font-bold text-center mb-6">{t("contact.form.header")}</h2>
                    
                    {/* Success Message */}
                    {submitStatus.success && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                            {submitStatus.message}
                        </div>
                    )}
                    
                    {/* Error Message */}
                    {submitStatus.error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {submitStatus.message}
                        </div>
                    )}
                    
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">
                            {t("contact.form.email")}
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">
                            {t("contact.form.message")}
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            rows={5}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-lg transition-all duration-300 ${
                            isSubmitting 
                                ? 'bg-blue-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700'
                        } text-white`}
                    >
                        {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                    </button>
                </form>
            </div>
        </div>
    );
}
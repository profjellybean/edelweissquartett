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
            <h1 className="text-5xl font-bold flex-col mt-20 mb-15">{t("contact.title")}</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
                <p className="text-lg flex-1 lg:m-6 md:m-6 md:p-6 lg:p-6">
                    <a href="mailto:edelweissquartett@gmail.com" className="text-blue-600">edelweissquartett@gmail.com</a>
                </p>

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
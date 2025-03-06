"use client";
import { useState } from "react";

export default function Contact() {
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
                    message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
                });
            } else {
                const errorData = await res.json();
                setSubmitStatus({
                    success: false,
                    error: true,
                    message: `Fehler beim Senden: ${errorData.error || 'Unbekannter Fehler'}`,
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus({
                success: false,
                error: true,
                message: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
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
            <h1 className="text-5xl font-bold flex-col mb-12">Kontakt</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
                <p className="text-lg mb-4 flex-1">
                    <a href="mailto:edelweissquartett@gmail.com" className="text-blue-600">edelweissquartett@gmail.com</a>
                </p>

                <div className="hidden md:flex w-[1px] bg-black h-auto self-stretch"></div>

                <form onSubmit={handleSubmit} className="p-6 rounded-xl shadow-lg bg-white flex-1 w-full sm:w-3/4 md:w-1/2 lg:w-lg">
                    <h2 className="text-2xl font-bold text-center mb-6">Kontaktieren sie uns:</h2>
                    
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
                        <label className="block mb-1 font-medium">E-Mail oder Telefonnummer</label>
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
                        <label className="block mb-1 font-medium">Nachricht</label>
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
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
}
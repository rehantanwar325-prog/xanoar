import { useState } from 'react';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', organization: '', service: '', message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    // IMPORTANT: Replace this with your actual Web3Forms Access Key
    // You can get one for free at https://web3forms.com/
    // IMPORTANT: Get your free Access Key at https://web3forms.com/
    // Replace 'YOUR_ACCESS_KEY_HERE' with your real key
    const ACCESS_KEY = "6c06e7fa-8c7a-4057-9b44-d99a7d832bc6";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check for placeholder key
        if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
            setError(
                "Config Required: You haven't added your Web3Forms Access Key yet. " + 
                "Messages will not reach your Gmail until you add a real key."
            );
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // Enhanced payload for better Gmail clarity
            const payload = {
                access_key: ACCESS_KEY,
                subject: `New Inquiry from ${formData.name} - ${formData.service || 'General'}`,
                from_name: formData.name,
                replyto: formData.email, // Allows you to hit 'Reply' in Gmail
                
                // Formatted fields for Web3Forms email body
                "Client Name": formData.name,
                "Email ID": formData.email,
                "Phone Number": formData.phone || "Not provided",
                "Organization/Role": formData.organization || "Independent",
                "Service Requested": formData.service || "General Inquiry",
                "Message Body": formData.message,
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            // Web3Forms returns { success: false, message: "..." } for invalid keys
            if (result.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', organization: '', service: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                // Handle specific Web3Forms API errors
                const apiMsg = result.message || "Invalid Access Key.";
                if (apiMsg.includes("insert your actual form_id")) {
                    setError("Web3Forms Configuration Error: The current key is a placeholder. Please use a real Access Key.");
                } else {
                    setError("Web3Forms Error: " + apiMsg);
                }
            }
        } catch (err) {
            setError("Network Error: Could not connect to the email server. " + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-12 border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none text-center transition-colors duration-500 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mx-auto mb-5 transition-colors duration-500">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2 transition-colors duration-500">Message Sent!</h3>
                <p className="text-dark-500 dark:text-dark-400 transition-colors duration-500">Thank you for reaching out. Our team has received your message and will get back to you within 24 hours.</p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary-500 font-bold hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-900 rounded-3xl p-8 md:p-10 border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none transition-colors duration-500">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2 transition-colors duration-500">Send Us a Message</h3>
            <p className="text-dark-500 dark:text-dark-400 text-sm mb-8 transition-colors duration-500">Fill out the form below and our team will respond within 24 hours.</p>

            {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl space-y-3 animate-in slide-in-from-top-2">
                    <div className="flex items-start gap-3 text-red-600 dark:text-red-400">
                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <p className="text-sm font-medium">{error}</p>
                    </div>
                    {error.includes("Config Required") || error.includes("placeholder") ? (
                        <div className="pl-8">
                            <a 
                                href="https://web3forms.com/#start" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 hover:underline"
                            >
                                Get my Access Key now →
                            </a>
                        </div>
                    ) : null}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 transition-colors duration-500">Full Name *</label>
                    <input
                        type="text" id="name" name="name" required
                        placeholder="John Doe"
                        value={formData.name} onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 transition-colors duration-500">Email Address *</label>
                    <input
                        type="email" id="email" name="email" required
                        placeholder="john@example.com"
                        value={formData.email} onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 transition-colors duration-500">Phone Number</label>
                    <input
                        type="tel" id="phone" name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone} onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 transition-colors duration-500">Organization / Student</label>
                    <input
                        type="text" id="organization" name="organization"
                        placeholder="Hospital / Clinic / Name of Institution"
                        value={formData.organization} onChange={handleChange}
                        className="input-field"
                    />
                </div>
            </div>

            <div className="mb-5">
                <label htmlFor="service" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 transition-colors duration-500">Service of Interest</label>
                <select
                    id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    className="input-field appearance-none"
                >
                    <option value="">Select a service...</option>
                    <option value="Training & Professional Development">Training & Development</option>
                    <option value="Regulatory Compliance">Regulatory Compliance</option>
                    <option value="Staffing Solutions">Staffing Solutions</option>
                    <option value="Consulting">Healthcare Consulting</option>
                    <option value="Student Inquiry">Student Inquiry / Academic</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 transition-colors duration-500">Your Message *</label>
                <textarea
                    id="message" name="message" rows={5} required
                    placeholder="Tell us about your needs and how we can help..."
                    value={formData.message} onChange={handleChange}
                    className="input-field resize-none"
                />
            </div>

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-accent w-full group py-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                    </div>
                ) : (
                    <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                )}
            </button>
        </form>
    );
}

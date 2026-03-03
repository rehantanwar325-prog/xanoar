import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', organization: '', service: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    if (submitted) {
        return (
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-12 border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none text-center transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mx-auto mb-5 transition-colors duration-500">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2 transition-colors duration-500">Thank You!</h3>
                <p className="text-dark-500 dark:text-dark-400 transition-colors duration-500">Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-900 rounded-2xl p-8 md:p-10 border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none transition-colors duration-500">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2 transition-colors duration-500">Send Us a Message</h3>
            <p className="text-dark-500 dark:text-dark-400 text-sm mb-8 transition-colors duration-500">Fill out the form below and our team will respond within 24 hours.</p>

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
                        placeholder="+1 (234) 567-890"
                        value={formData.phone} onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 transition-colors duration-500">Organization</label>
                    <input
                        type="text" id="organization" name="organization"
                        placeholder="Hospital / Clinic Name"
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
                    <option value="training">Training & Development</option>
                    <option value="compliance">Regulatory Compliance</option>
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

            <button type="submit" className="btn-accent w-full group">
                <Send className="w-5 h-5 mr-2" />
                Send Message
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </form>
    );
}

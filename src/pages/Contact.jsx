import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
    {
        icon: Phone,
        title: 'Call Us',
        details: ['+91 9166644260'],
        color: 'primary',
    },
    {
        icon: Mail,
        title: 'Email Us',
        details: ['xanoarkhealthcare@gmail.com'],
        color: 'secondary',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        details: ['Ahmedabad, Gujarat, India', 'Pin Code: 380015'],
        color: 'violet',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        details: ['Open 24 Hours', 'All 7 Days a Week'],
        color: 'amber',
    },
];

const colorMap = {
    primary: { bg: 'bg-primary-50 dark:bg-primary-500/10', text: 'text-primary-500 dark:text-primary-400' },
    secondary: { bg: 'bg-secondary-50 dark:bg-secondary-500/10', text: 'text-secondary-500 dark:text-secondary-400' },
    violet: { bg: 'bg-violet-50 dark:bg-violet-500/10', text: 'text-violet-500 dark:text-violet-400' },
    amber: { bg: 'bg-amber-50 dark:bg-amber-500/10', text: 'text-amber-500 dark:text-amber-400' },
};

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact Us — Xanoark Healthcare';
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main>
            {/* Page Hero */}
            <section className="relative pt-40 pb-20 bg-hero-gradient dark:bg-dark-950 overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6TTAgMGgydjM0SDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 dark:bg-primary-500/20 text-white/90 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Let's Start a
                            <span className="block text-primary-200 dark:text-primary-400">Conversation</span>
                        </h1>
                        <p className="text-lg text-white/70 dark:text-dark-300 leading-relaxed max-w-xl">
                            Have a question, need a consultation, or ready to partner with us? Reach out today — our team is ready to help you achieve your healthcare goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="relative -mt-8 mb-16 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {contactInfo.map((item, idx) => {
                            const Icon = item.icon;
                            const colors = colorMap[item.color];
                            return (
                                <div
                                    key={item.title}
                                    className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:border-primary-500/30 border border-dark-100 dark:border-dark-800 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 transition-colors duration-500`}>
                                        <Icon className={`w-6 h-6 ${colors.text} transition-colors duration-500`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 transition-colors duration-500">{item.title}</h3>
                                    {item.details.map((detail) => (
                                        <p key={detail} className="text-dark-500 dark:text-dark-400 text-sm transition-colors duration-500">{detail}</p>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 !pt-8 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="animate-on-scroll">
                            <ContactForm />
                        </div>

                        {/* Map + Info */}
                        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none overflow-hidden h-full flex flex-col transition-colors duration-500">
                                {/* Embedded Map */}
                                <div className="relative flex-1 min-h-[300px] bg-primary-50 dark:bg-dark-950 transition-colors duration-500">
                                    <iframe
                                        title="Xanoark Healthcare Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717961384!2d72.43965535!3d23.020473600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1679901234567!5m2!1sen!2sin"
                                        className="w-full h-full absolute inset-0"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>

                                {/* Quick info */}
                                <div className="p-6 bg-dark-900 text-white">
                                    <h3 className="text-lg font-bold mb-3">Headquarters</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm text-white">Ahmedabad, Gujarat, India</p>
                                                <p className="text-sm text-dark-400">Pin Code: 380015</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm text-white">+91 9166644260</p>
                                                <p className="text-sm text-dark-400">24/7 Available</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 transition-colors duration-500">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4 transition-colors duration-500">
                            FAQ
                        </span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How quickly can you provide staffing solutions?',
                                a: 'We maintain a robust network of pre-vetted professionals. For urgent needs, we can deploy qualified staff within 24-48 hours. For specialized positions, the timeline is typically 1-2 weeks.'
                            },
                            {
                                q: 'Do you offer services across India?',
                                a: 'Yes! Xanoark Healthcare Pvt. Ltd. is registered under ROC Ahmedabad and serves healthcare institutions across India, with our headquarters in Ahmedabad, Gujarat.'
                            },
                            {
                                q: 'What makes Xanoark different from other healthcare agencies?',
                                a: 'Our combination of deep industry expertise, innovative technology solutions, and a genuine commitment to client success sets us apart. We don\'t just provide services — we build lasting partnerships.'
                            },
                            {
                                q: 'How do I get started with a consultation?',
                                a: 'Simply fill out the contact form above or call us directly. A member of our team will schedule a free, no-obligation consultation within 24 hours.'
                            },
                        ].map((faq, idx) => (
                            <details
                                key={idx}
                                className="group bg-dark-50/50 dark:bg-dark-950 rounded-xl border border-dark-100 dark:border-dark-800 overflow-hidden animate-on-scroll transition-colors duration-500"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-primary-50/50 dark:hover:bg-dark-800 transition-colors duration-200">
                                    <span className="font-semibold text-dark-900 dark:text-white pr-4 transition-colors duration-500">{faq.q}</span>
                                    <span className="text-primary-500 dark:text-primary-400 text-xl font-light group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-dark-500 dark:text-dark-400 text-sm leading-relaxed transition-colors duration-500">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

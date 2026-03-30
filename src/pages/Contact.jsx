import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Tilt3D from '../components/Tilt3D';

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
        <main className="perspective-1000">
            {/* Page Hero */}
            <section className="relative pt-40 pb-20 bg-hero-gradient dark:bg-dark-950 overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6TTAgMGgydjM0SDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <Tilt3D>
                        <div className="max-w-3xl preserve-3d">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 dark:bg-primary-500/20 text-white/90 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm translate-z-20">
                                Contact Us
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 translate-z-50">
                                Let's Start a
                                <span className="block text-primary-200 dark:text-primary-400">Conversation</span>
                            </h1>
                            <p className="text-lg text-white/70 dark:text-dark-300 leading-relaxed max-w-xl translate-z-20">
                                Have a question, need a consultation, or ready to partner with us? Reach out today — our team is ready to help you achieve your healthcare goals.
                            </p>
                        </div>
                    </Tilt3D>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="relative -mt-12 mb-16 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((item, idx) => {
                            const Icon = item.icon;
                            const colors = colorMap[item.color];
                            return (
                                <Tilt3D key={item.title}>
                                    <div
                                        className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:border-primary-500/30 border border-dark-100 dark:border-dark-800 transition-all duration-300 animate-on-scroll h-full preserve-3d"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 transition-colors duration-500 translate-z-30`}>
                                            <Icon className={`w-7 h-7 ${colors.text} transition-colors duration-500`} />
                                        </div>
                                        <div className="translate-z-10">
                                            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 transition-colors duration-500">{item.title}</h3>
                                            {item.details.map((detail) => (
                                                item.title === 'Call Us' ? (
                                                    <a key={detail} href={`tel:${detail.replace(/\s/g, '')}`} className="text-dark-500 dark:text-dark-400 text-sm hover:text-primary-500 transition-colors block font-medium">
                                                        {detail}
                                                    </a>
                                                ) : (
                                                    <p key={detail} className="text-dark-500 dark:text-dark-400 text-sm transition-colors duration-500">{detail}</p>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </Tilt3D>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 !pt-8 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="animate-on-scroll perspective-1000">
                            <Tilt3D>
                                <div className="preserve-3d shadow-2xl rounded-3xl">
                                    <ContactForm />
                                </div>
                            </Tilt3D>
                        </div>

                        {/* Map + Info */}
                        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white dark:bg-dark-900 rounded-3xl border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none overflow-hidden h-full flex flex-col transition-colors duration-500">
                                {/* Embedded Map */}
                                <div className="relative flex-1 min-h-[400px] bg-primary-50 dark:bg-dark-950 transition-colors duration-500 grayscale dark:invert opacity-80 hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-700">
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
                                <div className="p-8 bg-dark-900 dark:bg-dark-950 text-white border-t border-dark-800">
                                    <h3 className="text-xl font-bold mb-6">Headquarters</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="flex items-start gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                                <MapPin className="w-5 h-5 flex-shrink-0" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white mb-1">Visit Us</p>
                                                <p className="text-sm text-dark-400">Ahmedabad, Gujarat, India</p>
                                                <p className="text-xs text-dark-500 mt-1 uppercase tracking-widest">Pin: 380015</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                                <Phone className="w-5 h-5 flex-shrink-0" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white mb-1">Call Us</p>
                                                <a href="tel:+919166644260" className="text-sm text-dark-300 hover:text-primary-400 transition-colors block">
                                                    +91 9166644260
                                                </a>
                                                <p className="text-xs text-dark-500 mt-1 uppercase tracking-widest">24/7 Available</p>
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
                <div className="max-w-3xl mx-auto px-4">
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
                        ].map((faq, idx) => (
                            <details
                                key={idx}
                                className="group bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm overflow-hidden animate-on-scroll transition-colors duration-500"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-primary-50/50 dark:hover:bg-dark-800 transition-colors duration-200">
                                    <span className="font-bold text-dark-900 dark:text-white pr-4 transition-colors duration-500 text-base">{faq.q}</span>
                                    <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-500/10 flex items-center justify-center text-primary-500 group-open:rotate-45 transition-all">
                                        <span className="text-xl font-light">+</span>
                                    </div>
                                </summary>
                                <div className="px-6 pb-6 text-dark-500 dark:text-dark-400 text-sm leading-relaxed transition-colors duration-500 border-t border-dark-50 dark:border-dark-800 pt-4 mt-2">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

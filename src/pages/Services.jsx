import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Users, Stethoscope, Laptop, Package, GraduationCap, ShieldCheck,
    ArrowRight, CheckCircle
} from 'lucide-react';
import CTASection from '../components/CTASection';
import servicesBg from '../assets/images/services-bg.png';
import Tilt3D from '../components/Tilt3D';

const services = [
    {
        icon: GraduationCap,
        title: 'Training & Professional Development',
        description: 'Invest in your team\'s growth with our comprehensive training programs. From clinical skill workshops to leadership development, we help healthcare professionals stay at the top of their field.',
        features: ['Clinical Skills Workshops', 'Leadership Development', 'Continuing Education Credits', 'Simulation-Based Training'],
        color: 'amber',
    },
    {
        icon: ShieldCheck,
        title: 'Regulatory Compliance',
        description: 'Stay ahead of ever-changing healthcare regulations with our compliance team. We provide proactive audit support, policy development, and ongoing monitoring to keep your organization fully compliant.',
        features: ['HIPAA Compliance Audits', 'OSHA Safety Programs', 'Policy & Procedure Development', 'Ongoing Compliance Monitoring'],
        color: 'emerald',
    },
];

const colorMap = {
    primary: { bg: 'bg-primary-50 dark:bg-primary-500/10', text: 'text-primary-500 dark:text-primary-400', border: 'border-primary-200 dark:border-primary-500/30', ring: 'ring-primary-100 dark:ring-primary-500/20' },
    secondary: { bg: 'bg-secondary-50 dark:bg-secondary-500/10', text: 'text-secondary-500 dark:text-secondary-400', border: 'border-secondary-200 dark:border-secondary-500/30', ring: 'ring-secondary-100 dark:ring-secondary-500/20' },
    blue: { bg: 'bg-blue-50 dark:bg-blue-500/10', text: 'text-blue-500 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-500/30', ring: 'ring-blue-100 dark:ring-blue-500/20' },
    violet: { bg: 'bg-violet-50 dark:bg-violet-500/10', text: 'text-violet-500 dark:text-violet-400', border: 'border-violet-200 dark:border-violet-500/30', ring: 'ring-violet-100 dark:ring-violet-500/20' },
    amber: { bg: 'bg-amber-50 dark:bg-amber-500/10', text: 'text-amber-500 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-500/30', ring: 'ring-amber-100 dark:ring-amber-500/20' },
    emerald: { bg: 'bg-emerald-50 dark:bg-emerald-500/10', text: 'text-emerald-500 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-500/30', ring: 'ring-emerald-100 dark:ring-emerald-500/20' },
};

export default function Services() {
    useEffect(() => {
        document.title = 'Our Services — Xanoark Healthcare';
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
                <div className="absolute inset-0 opacity-10 dark:opacity-5">
                    <img src={servicesBg} alt="" className="w-full h-full object-cover grayscale dark:invert" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950/30 dark:to-dark-950/80"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <Tilt3D>
                        <div className="max-w-3xl preserve-3d">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 dark:bg-primary-500/20 text-white/90 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm translate-z-20">
                                Our Services
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 translate-z-50">
                                End-to-End Healthcare
                                <span className="block text-primary-200 dark:text-primary-400">Solutions That Deliver</span>
                            </h1>
                            <p className="text-lg text-white/70 dark:text-dark-300 leading-relaxed max-w-xl translate-z-20">
                                From staffing and consulting to training and compliance, we offer a comprehensive suite of services designed to help healthcare organizations thrive.
                            </p>
                        </div>
                    </Tilt3D>
                </div>
            </section>

            {/* Services Detail */}
            <section className="section-padding bg-white dark:bg-dark-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-24">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            const colors = colorMap[service.color];
                            const isReversed = idx % 2 !== 0;

                            return (
                                <div
                                    key={service.title}
                                    className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center animate-on-scroll`}
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    {/* Visual */}
                                    <div className="lg:w-5/12 perspective-1000 w-full">
                                        <Tilt3D>
                                            <div className={`relative rounded-[2.5rem] ${colors.bg} p-16 flex items-center justify-center transition-colors duration-500 preserve-3d`}>
                                                <div className={`w-40 h-40 rounded-[2rem] bg-white dark:bg-dark-800 shadow-2xl border border-white/50 dark:border-dark-700 flex items-center justify-center transition-all duration-500 translate-z-50`}>
                                                    <Icon className={`w-20 h-20 ${colors.text} transition-colors duration-500 scale-110`} />
                                                </div>
                                                {/* Floating badge */}
                                                <div className="absolute -bottom-5 -right-5 px-6 py-3 rounded-2xl bg-white dark:bg-dark-800 shadow-xl border border-dark-100 dark:border-dark-700 transition-colors duration-500 translate-z-100 ring-4 ring-white/50 dark:ring-dark-900/50">
                                                    <span className={`text-lg font-black ${colors.text} transition-colors duration-500`}>0{idx + 1}</span>
                                                </div>
                                            </div>
                                        </Tilt3D>
                                    </div>

                                    {/* Content */}
                                    <div className="lg:w-7/12">
                                        <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6 transition-colors duration-500">{service.title}</h2>
                                        <p className="text-dark-500 dark:text-dark-400 leading-relaxed mb-8 text-lg transition-colors duration-500">{service.description}</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-3 group">
                                                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                        <CheckCircle className={`w-5 h-5 ${colors.text} transition-colors duration-500`} />
                                                    </div>
                                                    <span className="text-base text-dark-700 dark:text-dark-300 font-medium transition-colors duration-500">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="btn-primary text-base px-8 group"
                                        >
                                            Request This Service
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 transition-colors duration-500 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                            How It Works
                        </span>
                        <h2 className="section-title">
                            Our Simple
                            <span className="gradient-text block">4-Step Process</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consultation', desc: 'We start with a thorough assessment of your needs, challenges, and goals.' },
                            { step: '02', title: 'Custom Plan', desc: 'Our experts craft a tailored solution strategy aligned with your objectives.' },
                            { step: '03', title: 'Implementation', desc: 'We deploy resources and solutions with precision, ensuring minimal disruption.' },
                            { step: '04', title: 'Ongoing Support', desc: 'Continuous monitoring, optimization, and support to ensure lasting results.' },
                        ].map((item, idx) => (
                            <Tilt3D key={item.step}>
                                <div className="text-center p-8 rounded-3xl bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-800 shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll preserve-3d" style={{ animationDelay: `${idx * 0.1}s` }}>
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6 text-white font-black text-2xl shadow-xl translate-z-50">
                                        {item.step}
                                    </div>
                                    <div className="translate-z-20">
                                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 transition-colors duration-500">{item.title}</h3>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed transition-colors duration-500">{item.desc}</p>
                                    </div>
                                </div>
                            </Tilt3D>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}

import { Link } from 'react-router-dom';
import {
    Users, Stethoscope, Laptop, Package, GraduationCap, ShieldCheck,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        icon: GraduationCap,
        title: 'Training & Development',
        description: 'Comprehensive training programs and certifications designed to elevate your healthcare team\'s skills and professional growth.',
        color: 'from-amber-500 to-amber-600',
        bgLight: 'bg-amber-50',
    },
    {
        icon: ShieldCheck,
        title: 'Regulatory Compliance',
        description: 'Expert support in meeting healthcare regulations, ensuring your organization stays compliant with HIPAA, OSHA, and industry standards.',
        color: 'from-emerald-500 to-emerald-600',
        bgLight: 'bg-emerald-50',
    },
];

export default function ServicesGrid({ limit, showHeader = true }) {
    const displayedServices = limit ? services.slice(0, limit) : services;

    return (
        <section className="section-padding bg-dark-50/50">
            <div className="max-w-7xl mx-auto">
                {showHeader && (
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                            Our Services
                        </span>
                        <h2 className="section-title text-balance">
                            Comprehensive Healthcare
                            <span className="gradient-text block">Solutions You Can Trust</span>
                        </h2>
                        <p className="section-subtitle mx-auto mt-5">
                            From staffing to compliance, we provide end-to-end solutions that empower healthcare providers to deliver exceptional care with confidence.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedServices.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="service-card animate-on-scroll"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className={`w-14 h-14 rounded-2xl ${service.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-7 h-7 text-${service.color.split('-')[1]}-500`} style={{ color: `var(--tw-gradient-from)` }} />
                                </div>
                                <h3 className="text-xl font-bold text-dark-900 mb-3">{service.title}</h3>
                                <p className="text-dark-500 text-sm leading-relaxed mb-5">{service.description}</p>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold hover:gap-3 transition-all duration-300"
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {limit && (
                    <div className="text-center mt-12">
                        <Link to="/services" className="btn-secondary group">
                            View All Services
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

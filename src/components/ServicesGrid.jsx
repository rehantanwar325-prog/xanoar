import { Link } from 'react-router-dom';
import {
    Users, Stethoscope, Laptop, Package, GraduationCap, ShieldCheck,
    ArrowRight
} from 'lucide-react';
import Tilt3D from './Tilt3D';

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
    {
        icon: Users,
        title: 'Healthcare Staffing',
        description: 'Connect with top-tier medical professionals. We provide vetted doctors, nurses, and administrative staff to meet your facility\'s needs.',
        color: 'from-blue-500 to-blue-600',
        bgLight: 'bg-blue-50',
    },
    {
        icon: Stethoscope,
        title: 'Medical Consulting',
        description: 'Strategic advice for healthcare facility setup, optimization, and management from industry veterans with decades of experience.',
        color: 'from-purple-500 to-purple-600',
        bgLight: 'bg-purple-50',
    },
    {
        icon: Laptop,
        title: 'Healthcare IT',
        description: 'Implementation and support for EMR/EHR systems, hospital management software, and cutting-edge digital health solutions.',
        color: 'from-cyan-500 to-cyan-600',
        bgLight: 'bg-cyan-50',
    },
    {
        icon: Package,
        title: 'Medical Supplies',
        description: 'Reliable supply chain for essential medical equipment, surgical kits, and pharmaceutical products at competitive rates.',
        color: 'from-rose-500 to-rose-600',
        bgLight: 'bg-rose-50',
    },
];

export default function ServicesGrid({ limit, showHeader = true }) {
    const displayedServices = limit ? services.slice(0, limit) : services;

    return (
        <section className="section-padding bg-dark-50/50 dark:bg-dark-900/10 transition-colors duration-500 perspective-1000">
            <div className="max-w-7xl mx-auto">
                {showHeader && (
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedServices.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <Tilt3D key={service.title} className="h-full">
                                <div
                                    className="service-card animate-on-scroll h-full preserve-3d group"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${service.bgLight} dark:bg-dark-800 flex items-center justify-center mb-6 translate-z-20`}>
                                        <Icon className="w-7 h-7 text-primary-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 translate-z-20">{service.title}</h3>
                                    <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed mb-5 translate-z-10">{service.description}</p>
                                    <Link
                                        to="/services"
                                        className="inline-flex items-center gap-2 text-primary-500 dark:text-primary-400 text-sm font-semibold hover:gap-3 transition-all duration-300 translate-z-10"
                                    >
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </Tilt3D>
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

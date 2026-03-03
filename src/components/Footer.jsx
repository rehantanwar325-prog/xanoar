import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Heart, Clock } from 'lucide-react';
import xanoarkLogo from '../assets/images/xanoark-logo.jpg';

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Our Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
];

const services = [
    'Training & Development',
    'Regulatory Compliance',
];

export default function Footer() {
    return (
        <footer className="relative bg-dark-50 dark:bg-dark-950 transition-colors duration-500 overflow-hidden border-t border-dark-100 dark:border-dark-800">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-4">
                            <img src={xanoarkLogo} alt="Xanoark Healthcare" className="h-12 w-auto object-contain dark:brightness-110 dark:contrast-110" />
                        </Link>
                        <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed mb-6">
                            Delivering innovative healthcare solutions with compassion, integrity, and excellence. Your trusted partner in building a healthier tomorrow.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/people/Xanoark-Healthcare/100083012345678/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-[#1877F2] dark:hover:bg-[#1877F2] text-dark-500 dark:text-dark-400 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a
                                href="https://www.instagram.com/xanoark/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 hover:text-white dark:hover:text-white hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-900 dark:text-white mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm flex items-center gap-2 group transition-colors duration-200"
                                    >
                                        <ArrowRight className="w-3 h-3 text-primary-500 dark:text-primary-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-900 dark:text-white mb-5">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm flex items-center gap-2 group transition-colors duration-200"
                                    >
                                        <ArrowRight className="w-3 h-3 text-primary-500 dark:text-primary-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                                        <span>{service}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-900 dark:text-white mb-5">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                                <span className="text-dark-500 dark:text-dark-400 text-sm">Ahmedabad, Gujarat, India 380015</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                                <a href="tel:+919166644260" className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors">
                                    +91 9166644260
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                                <a href="mailto:xanoarkhealthcare@gmail.com" className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors">
                                    xanoarkhealthcare@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 shadow-sm transition-colors duration-500">
                            <p className="text-xs text-dark-500 dark:text-dark-400 mb-1">Working Hours</p>
                            <p className="text-sm text-dark-900 dark:text-white font-medium">Open 24 Hours</p>
                            <p className="text-sm text-dark-500 dark:text-dark-400">All 7 Days a Week</p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-dark-200 dark:border-dark-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-500">
                    <p className="text-dark-500 dark:text-dark-400 text-sm">
                        © {new Date().getFullYear()} Xanoark Healthcare Pvt. Ltd. All rights reserved.
                    </p>
                    <p className="text-dark-500 dark:text-dark-400 text-sm flex items-center gap-1">
                        Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for better healthcare
                    </p>
                </div>
            </div>
        </footer>
    );
}

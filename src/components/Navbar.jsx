import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import xanoarkLogo from '../assets/images/xanoark-logo.jpg';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl shadow-lg py-3 border-b border-transparent dark:border-dark-800'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={xanoarkLogo} alt="Xanoark Healthcare" className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300 dark:brightness-110 dark:contrast-110" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                    ? scrolled
                                        ? 'text-primary-500 bg-primary-50 dark:bg-primary-500/10'
                                        : 'text-white bg-white/15 dark:bg-dark-800/50'
                                    : scrolled
                                        ? 'text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/5'
                                        : 'text-white/80 dark:text-dark-300 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-dark-800/30'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="tel:+919166644260"
                            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400' : 'text-white/80 dark:text-dark-300 hover:text-white dark:hover:text-white'
                                }`}
                        >
                            <Phone className="w-4 h-4" />
                            <span>+91 9166644260</span>
                        </a>

                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-dark-800 dark:text-dark-200' : 'text-white dark:text-dark-200'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="glass-card dark:glass-card-dark p-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-500/10'
                                    : 'text-dark-700 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </header>
    );
}

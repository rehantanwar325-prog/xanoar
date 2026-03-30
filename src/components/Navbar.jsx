import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(
        document.documentElement.classList.contains('dark')
    );
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        setDarkMode(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-500 ${scrolled
                ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-xl border-b border-dark-100 dark:border-dark-800 py-3 shadow-lg'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                                <span className="text-white font-black text-xl">X</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-black text-dark-900 dark:text-white tracking-tight leading-none">
                                    XANOARK
                                </span>
                                <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest leading-none mt-1">
                                    Healthcare
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 bg-dark-100/50 dark:bg-dark-800/50 p-1 rounded-2xl border border-dark-200/50 dark:border-dark-700/50 transition-colors duration-500">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    `relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${isActive
                                        ? 'text-white'
                                        : 'text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="relative z-10">{item.name}</span>
                                        {isActive && (
                                            <motion.span
                                                layoutId="active-pill"
                                                className="absolute inset-0 bg-primary-500 rounded-xl shadow-lg ring-2 ring-primary-500/20"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Action Area */}
                    <div className="hidden lg:flex items-center gap-4">

                        <button
                            onClick={toggleDarkMode}
                            className="p-3 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:text-primary-500 transition-all duration-300"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        
                        <Link to="/contact" className="btn-accent py-2.5 px-6 rounded-xl text-sm font-bold shadow-xl hover:shadow-primary-500/20 transition-all">
                            Appointment
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden items-center gap-3">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-900 dark:text-white transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-dark-900 border-b border-dark-100 dark:border-dark-800 overflow-hidden shadow-2xl"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center justify-between px-4 py-4 rounded-xl text-base font-bold transition-all ${isActive
                                            ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-500 border-l-4 border-primary-500'
                                            : 'text-dark-600 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800'
                                        }`
                                    }
                                >
                                    {item.name}
                                    <ChevronRight className="w-4 h-4 opacity-30" />
                                </NavLink>
                            ))}
                            <div className="pt-4 px-4">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full btn-accent py-4 rounded-xl text-center block font-bold"
                                >
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

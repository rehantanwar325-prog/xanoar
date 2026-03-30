import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt3D from '../components/Tilt3D';
import rebxantImg from '../assets/images/rebxant-dsr-new.jpg';
import xanofastImg from '../assets/images/xanofast-sp.jpg';
import xanofastSpImg from '../assets/images/xanofast-sp-tab-new.jpg';
import xanutussImg from '../assets/images/xanutuss-dx.jpg';
import zenowokImg from '../assets/images/zenowok-m.jpg';

const featuredProducts = [
    { id: 1, name: 'Rebxant DSR', desc: '10 Capsules • Digestive Health', description: 'Rabeprazole Sodium (EC) & Domperidone (SR) Capsules.', price: 41.25, rating: 5.0, reviews: 1245, badge: 'Best Seller', badgeColor: 'bg-amber-500', image: rebxantImg, isPhoto: true },
    { id: 2, name: 'Xanofast AP', desc: '10 Tablets • Pain Relief', description: 'Acecofenac Paracetamol Tablets IP 100mg/325mg.', price: 55, rating: 5.0, reviews: 892, badge: null, badgeColor: '', image: xanofastImg, isPhoto: true },
    { id: 3, name: 'Xanofast-SP', desc: '10 Tablets • Pain Relief', description: 'Aceclofenac, Paracetamol and Serratiopeptidase Tablets IP.', price: 103.12, rating: 5.0, reviews: 723, badge: null, badgeColor: '', image: xanofastSpImg, isPhoto: true },
    { id: 5, name: 'Xanutuss-DX', desc: '100ml • Cough & Cold', description: 'Dextromethorphan Hydrobromide, Chlorpheniramine Maleate and Guaiphenesin Syrup.', price: 119, rating: 5.0, reviews: 876, badge: 'Our Product', badgeColor: 'bg-primary-500', image: xanutussImg, isPhoto: true },
    { id: 6, name: 'Zenowok-M', desc: '10 Tablets • Allergy Relief', description: 'Levocetirizine Dihydrochloride & Montelukast Sodium Tablets IP.', price: 109, rating: 5.0, reviews: 879, badge: null, badgeColor: '', image: zenowokImg, isPhoto: true },
];

export default function Home() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        document.title = 'Xanoark Healthcare — Pioneering the Future of Healthcare';
        // Animate on scroll
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="perspective-1000">
            <HeroSection />

            {/* Why Choose Us bridge */}
            <section className="py-16 bg-white dark:bg-dark-950 relative transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Evidence-Based Solutions',
                                description: 'Every solution we deliver is grounded in the latest medical research and industry best practices.',
                                icon: '🔬',
                            },
                            {
                                title: 'Dedicated Support',
                                description: 'Our team of healthcare specialists is available around the clock to support your operations.',
                                icon: '🤝',
                            },
                            {
                                title: 'Proven Track Record',
                                description: '4+ years of delivering measurable results for hospitals, clinics, and health networks across India.',
                                icon: '📊',
                            },
                        ].map((item, idx) => (
                            <Tilt3D key={item.title}>
                                <div
                                    className="flex items-start gap-5 p-6 rounded-2xl bg-dark-50/50 dark:bg-dark-900/50 hover:bg-primary-50/50 dark:hover:bg-primary-500/10 border border-transparent hover:border-primary-100 dark:hover:border-primary-500/30 transition-all duration-300 animate-on-scroll preserve-3d"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <span className="text-3xl flex-shrink-0 translate-z-20">{item.icon}</span>
                                    <div className="translate-z-10">
                                        <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">{item.title}</h3>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </Tilt3D>
                        ))}
                    </div>
                </div>
            </section>

            <ServicesGrid limit={3} showHeader={true} />

            {/* Featured Products */}
            <section className="section-padding bg-white dark:bg-dark-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                            💊 Our Pharmacy
                        </span>
                        <h2 className="section-title">
                            Popular
                            <span className="gradient-text block">Medicines & Supplements</span>
                        </h2>
                        <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto mt-4">
                            Browse our top-selling medicines, vitamins, and supplements — all from licensed pharmacies at the best prices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product, idx) => (
                            <Tilt3D key={product.id}>
                                <div
                                    className="bg-white dark:bg-dark-900 rounded-3xl border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:border-primary-500/50 transition-all duration-500 group overflow-hidden animate-on-scroll flex flex-col h-full preserve-3d"
                                    style={{ animationDelay: `${idx * 0.08}s` }}
                                >
                                    {/* Image Area - Enhanced 3D */}
                                    <div className="relative p-8 bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 flex items-center justify-center min-h-[420px] preserve-3d">
                                        {/* Perspective Shadow */}
                                        <div className="absolute bottom-6 w-24 h-4 bg-dark-900/10 dark:bg-black/40 blur-xl rounded-full translate-z-10 group-hover:scale-110 transition-transform duration-500" />
                                        
                                        <div 
                                            className="relative z-10 translate-z-50 animate-float group-hover:drop-shadow-3d transition-all duration-500 cursor-zoom-in"
                                            onClick={() => setSelectedImage(product.image)}
                                        >
                                            {product.isPhoto ? (
                                                    <img 
                                                        src={product.image} 
                                                        alt={product.name} 
                                                        className="h-96 w-auto object-contain drop-shadow-2xl translate-z-30 group-hover:scale-110 transition-transform duration-500"
                                                    />
                                            ) : (
                                                <span className="text-6xl transition-transform duration-500">{product.image}</span>
                                            )}
                                        </div>

                                        {product.badge && (
                                            <span className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-white text-xs font-bold translate-z-20 ${product.badgeColor}`}>
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="p-6 flex-1 flex flex-col justify-between translate-z-20">
                                        <div>
                                            <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">{product.name}</h3>
                                            <p className="text-dark-400 dark:text-dark-500 text-xs mb-1">{product.desc}</p>
                                            <p className="text-dark-400 dark:text-dark-500 text-sm mb-4 line-clamp-2">{product.description}</p>

                                            <div className="flex items-center gap-2 mb-5">
                                                <div className="flex gap-0.5">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-dark-200 dark:text-dark-700'}`} />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-dark-400 dark:text-dark-500">({product.reviews})</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 mt-auto border-t border-dark-100 dark:border-dark-800">
                                            <div>
                                                <span className="text-2xl font-bold text-dark-900 dark:text-white">₹{product.price}</span>
                                            </div>
                                            <Link to="/products" className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-500/10 dark:text-primary-400 dark:hover:bg-primary-500/20 transition-all duration-300 flex items-center gap-1 translate-z-10 shadow-sm">
                                                Order Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tilt3D>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/products" className="btn-accent group inline-flex">
                            View All Products
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <StatsSection />
            <TestimonialsSection />
            <CTASection />
            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 bg-dark-950/80 backdrop-blur-xl cursor-zoom-out"
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl max-h-full flex items-center justify-center preserve-3d"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 md:-top-16 right-0 p-2 text-white/70 hover:text-white transition-colors duration-300"
                            >
                                <X className="w-8 h-8 md:w-10 md:h-10" />
                            </button>

                            <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-2xl shadow-black/50 border border-white/10 preserve-3d">
                                <img
                                    src={selectedImage}
                                    alt="Product Preview"
                                    className="max-w-full max-h-[80vh] object-contain block select-none"
                                />
                                
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}

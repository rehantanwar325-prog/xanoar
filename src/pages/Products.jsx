import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Star, Eye, Heart, Search,
    ChevronDown, ArrowRight, Tag, Truck, ShieldCheck, RotateCcw, Info, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt3D from '../components/Tilt3D';
import productsHero from '../assets/images/products-hero.png';
import rebxantImg from '../assets/images/rebxant-dsr-new.jpg';
import xanofastImg from '../assets/images/xanofast-sp.jpg';
import xanofastSpImg from '../assets/images/xanofast-sp-tab-new.jpg';
import xanutussImg from '../assets/images/xanutuss-dx.jpg';
import zenowokImg from '../assets/images/zenowok-m.jpg';


const products = [
    {
        id: 1,
        name: 'Rebxant DSR (10 Capsules)',
        price: 41.25,
        rating: 5,
        reviews: 1245,
        badgeColor: 'bg-amber-500',
        description: 'Rabeprazole Sodium (EC) & Domperidone (SR) Capsules.',
        image: rebxantImg,
        isPhoto: true,
        inStock: true,
        category: 'Digestive Health'
    },
    {
        id: 2,
        name: 'Xanofast AP (10 Tablets)',
        price: 55.00,
        rating: 5,
        reviews: 892,
        badge: null,
        badgeColor: '',
        description: 'Acecofenac Paracetamol Tablets IP 100mg/325mg.',
        image: xanofastImg,
        isPhoto: true,
        inStock: true,
        category: 'Pain Relief'
    },
    {
        id: 3,
        name: 'Xanofast-SP (10 Tablets)',
        price: 103.12,
        rating: 5,
        reviews: 723,
        badge: null,
        badgeColor: '',
        description: 'Aceclofenac, Paracetamol and Serratiopeptidase Tablets IP.',
        image: xanofastSpImg,
        isPhoto: true,
        inStock: true,
        category: 'Pain Relief'
    },
    {
        id: 4,
        name: 'Xanutuss-DX (100ml)',
        price: 119.00,
        rating: 5,
        reviews: 876,
        badgeColor: 'bg-primary-500',
        description: 'Dextromethorphan Hydrobromide, Chlorpheniramine Maleate and Guaiphenesin Syrup.',
        image: xanutussImg,
        isPhoto: true,
        inStock: true,
        category: 'Cough & Cold'
    },
    {
        id: 5,
        name: 'Zenowok-M (10 Tablets)',
        price: 109.00,
        rating: 5,
        reviews: 879,
        badgeColor: '',
        description: 'Levocetirizine Dihydrochloride & Montelukast Sodium Tablets IP',
        image: zenowokImg,
        isPhoto: true,
        inStock: true,
        category: 'Allergy Relief'
    }
];

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState('All Medicines');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        document.title = 'Medicines & Pharmacy — Xanoark Healthcare';
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [selectedCategory, searchQuery]);



    let filtered = products.filter(p =>
        (selectedCategory === 'All Medicines' || p.category === selectedCategory) &&
        (searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    return (
        <main className="perspective-2000">
            {/* Page Hero */}
            <section className="relative pt-36 pb-16 bg-hero-gradient dark:bg-dark-950 overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 opacity-10 dark:opacity-5">
                    <img src={productsHero} alt="" className="w-full h-full object-cover grayscale dark:invert transition-all duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950/30 dark:to-dark-950/80 transition-colors duration-500"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 dark:bg-primary-500/20 text-white/90 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm transition-colors duration-500">
                                 Online Pharmacy
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tight">
                                Medicines &
                                <span className="block text-primary-200 dark:text-primary-400 transition-colors duration-500">Pharmacy Store</span>
                            </h1>
                            <p className="text-lg text-white/70 dark:text-dark-300 leading-relaxed max-w-xl transition-colors duration-500">
                                Shop certified medicines, prescription drugs, vitamins, and healthcare supplements — all from licensed pharmacies at affordable prices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust badges */}
            <section className="bg-white dark:bg-dark-900 border-b border-dark-100 dark:border-dark-800 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Truck, text: 'Free Delivery ₹500+', color: 'text-primary-500 dark:text-primary-400' },
                            { icon: ShieldCheck, text: 'Licensed Pharmacy', color: 'text-secondary-500 dark:text-secondary-400' },
                            { icon: RotateCcw, text: 'Easy Returns', color: 'text-violet-500 dark:text-violet-400' },
                            { icon: Tag, text: 'Lowest Price', color: 'text-amber-500 dark:text-amber-400' },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.text} className="flex items-center gap-2 justify-center">
                                    <Icon className={`w-5 h-5 ${item.color} flex-shrink-0 transition-colors duration-500`} />
                                    <span className="text-sm font-medium text-dark-700 dark:text-dark-300 transition-colors duration-500">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Prescription notice */}
            <section className="bg-amber-50 dark:bg-amber-500/10 border-b border-amber-200 dark:border-amber-500/20 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <p className="text-amber-800 dark:text-amber-400 text-sm text-center font-medium transition-colors duration-500">
                         Items marked <span className="inline-block px-2 py-0.5 bg-red-500 text-white text-xs rounded font-bold">Prescription</span> require a valid prescription from your doctor before purchase.
                    </p>
                </div>
            </section>

            {/* Filters + Products */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 transition-colors duration-500 !py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
                        {['All Medicines', 'Pain Relief', 'Digestive Health', 'Cough & Cold', 'Allergy Relief'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 transform active:scale-95 preserve-3d shadow-sm ${
                                    selectedCategory === cat
                                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 -translate-y-1 translate-z-20'
                                        : 'bg-white dark:bg-dark-900 text-dark-500 dark:text-dark-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 border border-dark-100 dark:border-dark-800'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search and Sort bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400 dark:text-dark-500" />
                            <input
                                type="text"
                                placeholder="Search medicines, vitamins, supplements..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input-field !pl-12"
                            />
                        </div>
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="input-field appearance-none !pr-10 min-w-[180px]"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 dark:text-dark-500 pointer-events-none" />
                        </div>
                    </div>

                    <div>
                        {/* Product Grid */}
                        <div>
                            {filtered.length === 0 ? (
                                <div className="text-center py-16">
                                    <Search className="w-16 h-16 text-dark-200 dark:text-dark-700 mx-auto mb-4 transition-colors duration-500" />
                                    <p className="text-dark-500 dark:text-dark-400 font-medium text-lg transition-colors duration-500">No medicines found</p>
                                    <p className="text-dark-400 dark:text-dark-500 text-sm mt-1 transition-colors duration-500">Try adjusting your search or category filter.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                    {filtered.map((product, idx) => (
                                        <Tilt3D key={product.id}>
                                            <div
                                                className="bg-white dark:bg-dark-900 rounded-3xl border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:border-primary-500/30 transition-all duration-500 group overflow-hidden animate-on-scroll h-full flex flex-col preserve-3d"
                                                style={{ animationDelay: `${idx * 0.05}s` }}
                                            >
                                                {/* Image area - Enhanced 3D */}
                                                <div className="relative p-6 flex items-center justify-center bg-dark-50/50 dark:bg-dark-950/50 border-b border-dark-100/50 dark:border-dark-800/50 overflow-hidden min-h-[420px] preserve-3d">
                                                    {/* Shadow */}
                                                    <div className="absolute bottom-4 w-20 h-3 bg-dark-900/10 dark:bg-black/30 blur-lg rounded-full translate-z-10 group-hover:scale-110 transition-transform duration-500" />
                                                    
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
                                                            <span className="text-5xl transition-transform duration-500">{product.image}</span>
                                                        )}
                                                    </div>

                                                    {product.badge && (
                                                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-white text-xs font-bold translate-z-20 ${product.badgeColor}`}>
                                                            {product.badge}
                                                        </span> 
                                                    )}
                                                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 z-20 translate-z-30">
                                                        <button className="w-8 h-8 rounded-lg bg-white dark:bg-dark-800 shadow-md flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-500/10 text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 border border-transparent dark:border-dark-700 transition-colors">
                                                            <Heart className="w-3.5 h-3.5" />
                                                        </button>
                                                        <button className="w-8 h-8 rounded-lg bg-white dark:bg-dark-800 shadow-md flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-500/10 text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 border border-transparent dark:border-dark-700 transition-colors">
                                                            <Eye className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Details */}
                                                <div className="p-5 flex-1 flex flex-col justify-between translate-z-20">
                                                    <div>
                                                        <p className="text-[10px] font-bold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-1">{product.category}</p>
                                                        <h3 className="text-base font-bold text-dark-900 dark:text-white mb-1.5 transition-colors line-clamp-1">{product.name}</h3>
                                                        <p className="text-dark-400 dark:text-dark-500 text-xs leading-relaxed line-clamp-2 mb-3">{product.description}</p>

                                                        {/* Rating */}
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="flex gap-0.5">
                                                                {Array.from({ length: 5 }).map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-dark-200 dark:text-dark-700'}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <span className="text-xs text-dark-400 dark:text-dark-500">({product.reviews})</span>
                                                        </div>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="flex items-center justify-between pt-4 border-t border-dark-100 dark:border-dark-800">
                                                        <span className="text-lg font-bold text-dark-900 dark:text-white">₹{product.price}</span>
                                                        <Link to="/products" className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors translate-z-10">
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt3D>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>


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
        </main >
    );
}

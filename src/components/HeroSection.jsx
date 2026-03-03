import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import heroBanner from '../assets/images/hero-banner.png';

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={heroBanner}
                    alt="Xanoark Healthcare - Modern Medical Solutions"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-900/75 to-dark-900/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating decorations */}
            <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-down">
                        <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse"></span>
                        <span className="text-white/90 text-sm font-medium">Trusted by 100+ Healthcare Institutions</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
                        Pioneering the
                        <span className="block gradient-text mt-2">Future of Healthcare</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Xanoark Healthcare delivers cutting-edge medical solutions, expert consulting, and innovative technologies that empower providers to deliver exceptional patient care.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Link to="/contact" className="btn-accent group">
                            <span>Get Started Today</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services" className="inline-flex items-center gap-3 px-6 py-3.5 text-white/90 hover:text-white font-medium rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                            </div>
                            Explore Services
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { value: '4+', label: 'Years Experience' },
                                { value: '100+', label: 'Partner Institutions' },
                                { value: '98%', label: 'Client Satisfaction' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
                    <div className="w-1 h-2 rounded-full bg-white/50 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}

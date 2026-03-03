import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden bg-hero-gradient dark:bg-dark-950 transition-colors duration-500">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6TTAgMGgydjM0SDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 dark:opacity-20 transition-opacity duration-500"></div>

            {/* Floating orbs */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 dark:bg-primary-500/10 rounded-full blur-2xl animate-float transition-colors duration-500"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/5 dark:bg-secondary-500/10 rounded-full blur-2xl animate-float transition-colors duration-500" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    Ready to Transform Your
                    <span className="block mt-1">Healthcare Operations?</span>
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join 500+ healthcare institutions that trust Xanoark to deliver premium solutions. Let's build a healthier future — together.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                        Schedule a Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                        View Our Solutions
                    </Link>
                </div>
            </div>
        </section>
    );
}

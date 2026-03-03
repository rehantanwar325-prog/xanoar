import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Dr. Sarah Mitchell',
        role: 'Chief Medical Officer, Metro General Hospital',
        quote: 'Xanoark Healthcare transformed our staffing operations. Their team provided exceptionally qualified professionals who seamlessly integrated into our practice. Patient satisfaction scores have risen by 35% since we partnered with them.',
        rating: 5,
        initials: 'SM',
        color: 'from-primary-500 to-secondary-500',
    },
    {
        name: 'James Whitfield',
        role: 'CEO, Pacific Health Network',
        quote: 'The consulting team at Xanoark brought a level of insight that was truly game-changing. Their strategic guidance helped us reduce operational costs by 20% while improving our quality of care metrics across all departments.',
        rating: 5,
        initials: 'JW',
        color: 'from-secondary-500 to-emerald-500',
    },
    {
        name: 'Dr. Rajesh Patel',
        role: 'Director, Advanced Care Clinic',
        quote: 'Xanoark Healthcare\'s products have been incredibly reliable for our patients. The quality of their medicines is top-notch, and their customer support is excellent.',
        rating: 5,
        initials: 'RP',
        color: 'from-blue-500 to-cyan-500',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                        Testimonials
                    </span>
                    <h2 className="section-title">
                        What Our Partners
                        <span className="gradient-text block">Say About Us</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-5">
                        Don't just take our word for it — hear from the healthcare leaders who trust Xanoark to deliver results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div
                            key={t.name}
                            className="relative bg-white rounded-2xl p-8 border border-dark-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            {/* Quote mark */}
                            <div className="absolute -top-4 left-8 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-btn">
                                <span className="text-white text-lg font-serif">"</span>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-5 mt-2">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-dark-600 text-sm leading-relaxed mb-6 italic">
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-5 border-t border-dark-100">
                                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                                    <span className="text-white text-sm font-bold">{t.initials}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-dark-900">{t.name}</p>
                                    <p className="text-xs text-dark-400">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

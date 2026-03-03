import { useEffect, useRef, useState } from 'react';
import { Award, Users, Building2, HeartPulse } from 'lucide-react';

const stats = [
    { icon: Award, value: 4, suffix: '+', label: 'Years of Excellence', color: 'text-primary-500', bg: 'bg-primary-50' },
    { icon: Users, value: 100, suffix: '+', label: 'Partner Institutions', color: 'text-secondary-500', bg: 'bg-secondary-50' },
    { icon: HeartPulse, value: 10000, suffix: '+', label: 'Lives Impacted', color: 'text-rose-500', bg: 'bg-rose-50' },
    { icon: Building2, value: 98, suffix: '%', label: 'Client Satisfaction', color: 'text-violet-500', bg: 'bg-violet-50' },
];

function AnimatedCounter({ target, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 2000;
                    const step = (timestamp) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    const formatted = target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count;

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold text-dark-900">
            {formatted}{suffix}
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-50/50 to-white"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="text-center group animate-on-scroll"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                <p className="text-dark-500 text-sm mt-2 font-medium">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

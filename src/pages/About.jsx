import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, CheckCircle, Shield, Award } from 'lucide-react';
import aboutTeam from '../assets/images/about-team.png';
import founderImg from '../assets/images/founder-jahid-jatu.png';
import CTASection from '../components/CTASection';
import Tilt3D from '../components/Tilt3D';

const values = [
    { icon: Heart, title: 'Compassion', description: 'We place patient well-being and empathy at the center of every decision we make.' },
    { icon: Shield, title: 'Integrity', description: 'Transparent practices and ethical standards define every partnership we build.' },
    { icon: Target, title: 'Innovation', description: 'We continuously explore cutting-edge technologies to advance healthcare delivery.' },
    { icon: Award, title: 'Excellence', description: 'Uncompromising quality in every service, every solution, and every interaction.' },
];

const timeline = [
    { year: '2021', title: 'Company Founded', desc: 'Xanoark Healthcare Pvt. Ltd. was incorporated on May 19, 2021 under ROC Ahmedabad with a vision to revolutionize healthcare delivery in India.' },
    { year: '2022', title: 'First Major Partnerships', desc: 'Partnered with hospitals and clinics across Gujarat, establishing a strong regional presence in healthcare solutions.' },
    { year: '2023', title: 'Product & Service Expansion', desc: 'Launched our online pharmacy platform and significantly expanded our healthcare operations.' },
    { year: '2024', title: 'Pan-India Growth', desc: 'Scaled operations beyond Gujarat to serve healthcare institutions across multiple states with 100+ active partnerships.' },
    { year: '2025', title: 'Industry Recognition', desc: 'Recognized as a trusted healthcare solutions provider with growing client base and plans for AI-powered health diagnostics.' },
];

export default function About() {
    useEffect(() => {
        document.title = 'About Us — Xanoark Healthcare';
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="perspective-1000">
            {/* Page Hero */}
            <section className="relative pt-40 pb-20 bg-hero-gradient dark:bg-dark-950 overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6TTAgMGgydjM0SDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <Tilt3D>
                        <div className="max-w-3xl preserve-3d">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 dark:bg-primary-500/20 text-white/90 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm translate-z-20">
                                About Xanoark Healthcare
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 translate-z-50">
                                Building a Healthier
                                <span className="block text-primary-200 dark:text-primary-400">World Together</span>
                            </h1>
                            <p className="text-lg text-white/70 dark:text-dark-300 leading-relaxed max-w-xl translate-z-20">
                                Since May 2021, Xanoark Healthcare Pvt. Ltd. has been delivering innovative healthcare solutions from Ahmedabad, Gujarat — empowering providers, supporting institutions, and improving patient outcomes across India.
                            </p>
                        </div>
                    </Tilt3D>
                </div>
            </section>

            {/* Mission & Vision cards */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Tilt3D>
                            <div className="bg-white dark:bg-dark-900 rounded-3xl p-10 border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:border-primary-500/30 transition-all duration-300 animate-on-scroll preserve-3d h-full">
                                <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center mb-8 translate-z-20">
                                    <Target className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                                </div>
                                <div className="translate-z-10">
                                    <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">Our Mission</h3>
                                    <p className="text-dark-500 dark:text-dark-400 leading-relaxed text-lg">
                                        To empower healthcare institutions with innovative solutions, skilled professionals, and strategic guidance that enhance operational efficiency, elevate patient care standards, and build sustainable health systems for the future.
                                    </p>
                                </div>
                            </div>
                        </Tilt3D>

                        <Tilt3D>
                            <div className="bg-white dark:bg-dark-900 rounded-3xl p-10 border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:border-secondary-500/30 transition-all duration-300 animate-on-scroll preserve-3d h-full" style={{ animationDelay: '0.15s' }}>
                                <div className="w-16 h-16 rounded-2xl bg-secondary-50 dark:bg-secondary-500/10 flex items-center justify-center mb-8 translate-z-20">
                                    <Eye className="w-8 h-8 text-secondary-500 dark:text-secondary-400" />
                                </div>
                                <div className="translate-z-10">
                                    <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">Our Vision</h3>
                                    <p className="text-dark-500 dark:text-dark-400 leading-relaxed text-lg">
                                        To become the world's most trusted healthcare solutions partner — where every hospital, clinic, and provider has seamless access to the resources, technology, and talent they need to deliver exceptional care.
                                    </p>
                                </div>
                            </div>
                        </Tilt3D>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-white dark:bg-dark-900 transition-colors duration-500 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                            Our Values
                        </span>
                        <h2 className="section-title">
                            The Principles That
                            <span className="gradient-text block">Guide Everything We Do</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, idx) => {
                            const Icon = v.icon;
                            return (
                                <Tilt3D key={v.title}>
                                    <div className="text-center p-8 rounded-3xl bg-dark-50/50 dark:bg-dark-950 hover:bg-white dark:hover:bg-dark-800 hover:shadow-card-hover dark:hover:shadow-none border border-transparent dark:border-dark-800 hover:border-primary-100 dark:hover:border-primary-500/30 transition-all duration-500 group animate-on-scroll preserve-3d" style={{ animationDelay: `${idx * 0.1}s` }}>
                                        <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-500/10 group-hover:bg-primary-100 dark:group-hover:bg-primary-500/20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300 translate-z-20">
                                            <Icon className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                                        </div>
                                        <div className="translate-z-10">
                                            <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-3">{v.title}</h3>
                                            <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">{v.description}</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Founder / Leadership - Enhanced 3D */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                            👤 Leadership
                        </span>
                        <h2 className="section-title">
                            Meet Our
                            <span className="gradient-text block">Founder & Visionary</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Photo 3D Frame */}
                        <div className="animate-on-scroll flex justify-center perspective-1000">
                            <Tilt3D>
                                <div className="relative group preserve-3d">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <div className="relative p-3 bg-white dark:bg-dark-900 rounded-[2rem] border-2 border-primary-500/20 dark:border-primary-500/30 shadow-2xl translate-z-20">
                                        <img
                                            src={founderImg}
                                            alt="Mr. Jahid Jatu — Founder, Xanoark Healthcare"
                                            className="w-[24rem] h-[30rem] object-cover object-top rounded-2xl dark:brightness-110 translate-z-50 shadow-lg"
                                        />
                                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-8 py-3 bg-primary-500 dark:bg-primary-600 text-white rounded-full text-base font-bold shadow-xl whitespace-nowrap translate-z-100 ring-4 ring-white dark:ring-dark-900">
                                            Founder & CEO
                                        </div>
                                    </div>
                                </div>
                            </Tilt3D>
                        </div>

                        {/* Bio */}
                        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-4xl font-bold text-dark-900 dark:text-white mb-2">
                                Mr. Jahid Jatu
                            </h3>
                            <p className="text-primary-500 dark:text-primary-400 text-lg font-semibold mb-8">
                                Founder & Chief Executive Officer
                            </p>

                            <div className="space-y-5 text-dark-500 dark:text-dark-400 leading-relaxed text-lg">
                                <p>
                                    With over <strong className="text-dark-800 dark:text-dark-200">10 years of experience</strong> in the healthcare and pharmaceutical industry, Mr. Jahid Jatu is the driving force behind Xanoark Healthcare Pvt. Ltd. His deep understanding of the Indian healthcare ecosystem and unwavering commitment to quality have been instrumental in shaping the company's vision and growth.
                                </p>
                                <p>
                                    A visionary entrepreneur at heart, Mr. Jahid Jatu founded Xanoark Healthcare in 2021 with a clear mission: to bridge the gap between innovative healthcare solutions and the institutions that need them most. Under his leadership, the company has grown from a regional initiative in Gujarat to a pan-India healthcare solutions provider with 100+ active partnerships.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-dark-100 dark:border-dark-800">
                                {[
                                    { num: '10+', label: 'Years Exp.' },
                                    { num: '100+', label: 'Partnerships' },
                                    { num: '4+', label: 'Years CEO' },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center group">
                                        <div className="text-3xl font-extrabold text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors">{stat.num}</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-dark-400 dark:text-dark-500 mt-2">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}

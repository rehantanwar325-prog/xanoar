import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import aboutTeam from '../assets/images/about-team.png';
import founderImg from '../assets/images/founder-jahid-jatu.png';
import CTASection from '../components/CTASection';

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
        <main>
            {/* Page Hero */}
            <section className="relative pt-40 pb-20 bg-hero-gradient dark:bg-dark-950 overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6TTAgMGgydjM0SDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 dark:bg-primary-500/20 text-white/90 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
                            About Xanoark Healthcare
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Building a Healthier
                            <span className="block text-primary-200 dark:text-primary-400">World Together</span>
                        </h1>
                        <p className="text-lg text-white/70 dark:text-dark-300 leading-relaxed max-w-xl">
                            Since May 2021, Xanoark Healthcare Pvt. Ltd. has been delivering innovative healthcare solutions from Ahmedabad, Gujarat — empowering providers, supporting institutions, and improving patient outcomes across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white dark:bg-dark-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-on-scroll">
                            <img
                                src={aboutTeam}
                                alt="Xanoark Healthcare Team"
                                className="rounded-2xl shadow-card-hover dark:shadow-none dark:border dark:border-dark-800 w-full object-cover dark:brightness-90"
                            />
                        </div>
                        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                                Who We Are
                            </span>
                            <h2 className="section-title mb-6">
                                A Trusted Partner in
                                <span className="gradient-text block">Healthcare Excellence</span>
                            </h2>
                            <p className="text-dark-500 dark:text-dark-400 leading-relaxed mb-6">
                                Xanoark Healthcare Pvt. Ltd. was incorporated on May 19, 2021 under the Registrar of Companies (ROC), Ahmedabad. What started as a passionate initiative by a team of dedicated healthcare professionals in Gujarat has grown into a trusted healthcare solutions provider serving hospitals, clinics, and health networks across India.
                            </p>
                            <p className="text-dark-500 dark:text-dark-400 leading-relaxed mb-8">
                                With over 4 years of active operations and a current status of Active, we believe that every healthcare institution deserves access to world-class resources, expert guidance, and transformative technologies. Our team combines deep industry expertise with a genuine passion for improving lives — and that's what sets us apart.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {['ROC Registered', 'ISO Certified', 'FSSAI Approved', '24/7 Support'].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-secondary-500 dark:text-secondary-400 flex-shrink-0" />
                                        <span className="text-sm font-medium text-dark-700 dark:text-dark-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-dark-900 rounded-2xl p-10 border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:border-primary-500/30 transition-all duration-300 animate-on-scroll">
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-primary-500 dark:text-primary-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Our Mission</h3>
                            <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                                To empower healthcare institutions with innovative solutions, skilled professionals, and strategic guidance that enhance operational efficiency, elevate patient care standards, and build sustainable health systems for the future.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-dark-900 rounded-2xl p-10 border border-dark-100 dark:border-dark-800 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:border-secondary-500/30 transition-all duration-300 animate-on-scroll" style={{ animationDelay: '0.15s' }}>
                            <div className="w-14 h-14 rounded-2xl bg-secondary-50 dark:bg-secondary-500/10 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-secondary-500 dark:text-secondary-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Our Vision</h3>
                            <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                                To become the world's most trusted healthcare solutions partner — where every hospital, clinic, and provider has seamless access to the resources, technology, and talent they need to deliver exceptional care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-white dark:bg-dark-900 transition-colors duration-500">
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
                                <div key={v.title} className="text-center p-8 rounded-2xl bg-dark-50/50 dark:bg-dark-950 hover:bg-white dark:hover:bg-dark-800 hover:shadow-card-hover dark:hover:shadow-none border border-transparent dark:border-dark-800 hover:border-primary-100 dark:hover:border-primary-500/30 transition-all duration-500 group animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                                    <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-500/10 group-hover:bg-primary-100 dark:group-hover:bg-primary-500/20 flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{v.title}</h3>
                                    <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">{v.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Founder / Leadership */}
            <section className="section-padding bg-white dark:bg-dark-900 transition-colors duration-500">
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Photo */}
                        <div className="animate-on-scroll flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <img
                                    src={founderImg}
                                    alt="Mr. Jahid Jatu — Founder, Xanoark Healthcare"
                                    className="relative w-[26rem] h-[32rem] object-cover object-top rounded-2xl shadow-card-hover dark:shadow-none border-2 border-white dark:border-dark-700 transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary-500 dark:bg-primary-600 text-white rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                                    Founder & CEO
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
                                Mr. Jahid Jatu
                            </h3>
                            <p className="text-primary-500 dark:text-primary-400 font-semibold mb-6">
                                Founder & Chief Executive Officer
                            </p>

                            <div className="space-y-4 text-dark-500 dark:text-dark-400 leading-relaxed">
                                <p>
                                    With over <strong className="text-dark-800 dark:text-dark-200">10 years of experience</strong> in the healthcare and pharmaceutical industry, Mr. Jahid Jatu is the driving force behind Xanoark Healthcare Pvt. Ltd. His deep understanding of the Indian healthcare ecosystem and unwavering commitment to quality have been instrumental in shaping the company's vision and growth.
                                </p>
                                <p>
                                    A visionary entrepreneur at heart, Mr. Jahid Jatu founded Xanoark Healthcare in 2021 with a clear mission: to bridge the gap between innovative healthcare solutions and the institutions that need them most. Under his leadership, the company has grown from a regional initiative in Gujarat to a pan-India healthcare solutions provider with 100+ active partnerships.
                                </p>
                                <p>
                                    Known for his <strong className="text-dark-800 dark:text-dark-200">humble and approachable nature</strong>, Mr. Jahid Jatu believes that great business is built on trust, transparency, and genuine care for people. He is deeply involved in every aspect of the business — from strategic planning and product development to client relationships and team mentorship.
                                </p>
                                <p>
                                    Beyond business, he is passionate about making healthcare accessible and affordable for all, and actively contributes to community health awareness initiatives. His philosophy is simple: <em className="text-primary-500 dark:text-primary-400">"When you put people first, success naturally follows."</em>
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-dark-100 dark:border-dark-800">
                                {[
                                    { num: '10+', label: 'Years Experience' },
                                    { num: '100+', label: 'Partnerships Built' },
                                    { num: '4+', label: 'Years Leading Xanoark' },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl font-bold text-dark-900 dark:text-white">{stat.num}</div>
                                        <div className="text-xs text-dark-400 dark:text-dark-500 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-dark-50/50 dark:bg-dark-950 transition-colors duration-500">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                            Our Journey
                        </span>
                        <h2 className="section-title">
                            A Legacy of
                            <span className="gradient-text block">Growth & Impact</span>
                        </h2>
                    </div>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 -translate-x-1/2"></div>

                        <div className="space-y-12">
                            {timeline.map((item, idx) => (
                                <div
                                    key={item.year}
                                    className={`relative flex items-center gap-8 animate-on-scroll ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-950 shadow-md -translate-x-1/2 z-10 transition-colors duration-500"></div>

                                    {/* Content */}
                                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] bg-white dark:bg-dark-900 p-6 rounded-2xl shadow-sm dark:shadow-none border border-transparent dark:border-dark-800 transition-colors duration-500 ${idx % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'}`}>
                                        <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold mb-3">{item.year}</span>
                                        <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-dark-500 dark:text-dark-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}

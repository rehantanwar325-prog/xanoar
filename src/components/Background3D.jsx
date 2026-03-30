import { motion } from 'framer-motion';

export default function Background3D() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Ambient Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-dark-50 dark:from-dark-950 dark:to-dark-900 transition-colors duration-500" />
            
            {/* Floating Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary-500/10 blur-[120px] dark:bg-primary-500/20"
            />
            
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 120, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-secondary-500/10 blur-[120px] dark:bg-secondary-500/15"
            />

            {/* Grid Pattern with Perspective */}
            <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    transformOrigin: 'top',
                    color: 'var(--primary-500, #0A74DA)'
                }}
            />
            
            {/* Floating 3D Shapes (SVG particles) */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ 
                            x: Math.random() * window.innerWidth, 
                            y: Math.random() * window.innerHeight,
                            z: Math.random() * -500,
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            rotate: [null, Math.random() * 360 + 180]
                        }}
                        transition={{
                            duration: 30 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-24 h-24 border border-primary-500/20 dark:border-primary-400/10 rounded-2xl"
                        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                    />
                ))}
            </div>
        </div>
    );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibrant-orange/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-electric-blue font-semibold text-lg mb-4 tracking-wider uppercase"
                    >
                        Graphic & Web Designer
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
                    >
                        Crafting Digital
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-vibrant-orange">
                            Experiences
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-muted-gray text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Transforming ideas into stunning visual identities and web experiences.
                        <br />
                        3+ years of creating brands that stand out.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#portfolio"
                            className="px-8 py-4 bg-electric-blue text-dark-primary font-bold rounded-lg hover:bg-electric-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/50"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border-2 border-electric-blue text-electric-blue font-bold rounded-lg hover:bg-electric-blue hover:text-dark-primary transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className="text-electric-blue" size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

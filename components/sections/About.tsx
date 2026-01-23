'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award, Users } from 'lucide-react';

export default function About() {
    const stats = [
        { icon: Briefcase, label: 'Years Experience', value: '5+' },
        { icon: Award, label: 'Projects Completed', value: '50+' },
        { icon: Users, label: 'Happy Clients', value: '70+' },
    ];

    return (
        <section id="about" className="py-24 bg-dark-secondary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        About <span className="text-electric-blue">Me</span>
                    </h2>
                    <p className="text-muted-gray text-xl max-w-3xl mx-auto leading-relaxed">
                        I&apos;m a passionate graphic and web designer with over 3 years of experience creating
                        compelling visual identities and digital experiences. My work combines modern aesthetics
                        with strategic thinking to help brands stand out in the digital landscape.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-dark-accent p-8 rounded-2xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 hover:scale-105"
                        >
                            <stat.icon className="text-electric-blue mb-4 mx-auto" size={48} />
                            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-muted-gray">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-dark-accent p-12 rounded-2xl border border-electric-blue/20"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Brand Identity', 'Web Design', 'UI/UX Design', 'Graphic Design', 'Logo Design', 'Typography', 'Color Theory', 'Prototyping'].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-primary px-6 py-4 rounded-lg text-center border border-electric-blue/10 hover:border-electric-blue/50 transition-all duration-300"
                            >
                                <p className="text-white font-medium">{skill}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

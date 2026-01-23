'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (you can integrate with email service later)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'admin@mapstudios.us', href: 'mailto:admin@mapstudios.us' },
        { icon: MapPin, label: 'Location', value: 'Canada', href: '#' },
    ];

    return (
        <section id="contact" className="py-24 bg-dark-secondary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Let's <span className="text-electric-blue">Connect</span>
                    </h2>
                    <p className="text-muted-gray text-xl max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind? Let's work together to create something amazing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
                            <p className="text-muted-gray leading-relaxed mb-8">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-6 bg-dark-accent rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 group"
                            >
                                <div className="p-3 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                                    <item.icon className="text-electric-blue" size={24} />
                                </div>
                                <div>
                                    <p className="text-muted-gray text-sm">{item.label}</p>
                                    <p className="text-white font-semibold">{item.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-dark-accent p-8 rounded-2xl border border-electric-blue/20"
                    >
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-semibold mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-dark-primary border border-electric-blue/20 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-dark-primary border border-electric-blue/20 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={6}
                                    className="w-full px-4 py-3 bg-dark-primary border border-electric-blue/20 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-electric-blue text-dark-primary font-bold rounded-lg hover:bg-electric-blue/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={20} />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

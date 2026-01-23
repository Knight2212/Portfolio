'use client';

import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Globe, href: 'https://www.behance.net/mapstudios', label: 'Behance' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Mail, href: 'mailto:admin@mapstudios.us', label: 'Email' },
    ];

    return (
        <footer className="bg-dark-primary border-t border-electric-blue/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <span className="text-white">MAP</span>
                        <span className="text-electric-blue"> Studios</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-accent rounded-lg border border-electric-blue/20 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300 hover:scale-110"
                                aria-label={social.label}
                            >
                                <social.icon className="text-electric-blue" size={20} />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-muted-gray text-sm">
                        © {currentYear} MAP Studios. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

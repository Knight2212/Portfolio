'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
    project: {
        id: string;
        title: string;
        category: string;
        description: string;
        image: string;
        tags: string[];
        gallery?: string[];
    } | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl bg-dark-secondary rounded-2xl overflow-hidden border border-electric-blue/20 shadow-2xl shadow-electric-blue/10 max-h-[90vh] overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-dark-primary/50 text-white rounded-full hover:bg-electric-blue hover:text-dark-primary transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Image */}
                        <div className="relative w-full h-64 md:h-96">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            <span className="inline-block px-4 py-2 bg-electric-blue/10 text-electric-blue font-semibold rounded-full text-sm mb-4">
                                {project.category}
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                {project.title}
                            </h2>

                            <p className="text-muted-gray text-lg leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="mb-8">
                                <h3 className="text-white font-semibold mb-4">Technologies & Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-dark-primary text-muted-gray rounded-lg border border-electric-blue/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Gallery */}
                            {project.gallery && project.gallery.length > 0 && (
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h3 className="text-white font-semibold mb-6">Project Gallery</h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        {project.gallery.map((img, index) => (
                                            <div key={index} className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden border border-white/5 group">
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} - Gallery Image ${index + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

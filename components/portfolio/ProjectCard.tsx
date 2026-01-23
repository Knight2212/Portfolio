'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    index: number;
    onClick: () => void;
}

export default function ProjectCard({ title, category, description, image, tags, index, onClick }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            className="group relative bg-dark-accent rounded-2xl overflow-hidden border border-electric-blue/10 hover:border-electric-blue/50 transition-all duration-500 cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-dark-primary">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-transparent z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-electric-blue/0 group-hover:bg-electric-blue/10 transition-all duration-500 z-20" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-30">
                    <span className="px-4 py-2 bg-electric-blue/90 backdrop-blur-sm text-dark-primary font-semibold text-sm rounded-full">
                        {category}
                    </span>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 z-30 p-3 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-electric-blue hover:scale-110">
                    <Eye className="text-white" size={20} />
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-muted-gray mb-4 leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-dark-primary text-muted-gray text-sm rounded-full border border-electric-blue/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

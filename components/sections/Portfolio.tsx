'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '../portfolio/ProjectCard';
import ProjectModal from '../portfolio/ProjectModal';
import { projects } from '@/data/projects';

export default function Portfolio() {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const categories = ['All', 'Web Design', 'Branding', 'E-commerce', 'Graphic Design', 'App Design'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter || (filter === 'Web Design' && project.tags.includes('Web Design')));

    return (
        <section id="portfolio" className="py-24 bg-dark-primary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Featured <span className="text-electric-blue">Work</span>
                    </h2>
                    <p className="text-muted-gray text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                        A selection of my recent projects showcasing web design, branding, and digital experiences.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${filter === category
                                        ? 'bg-electric-blue text-dark-primary scale-105'
                                        : 'bg-dark-accent text-muted-gray hover:text-white border border-electric-blue/20 hover:border-electric-blue/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            index={index}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}

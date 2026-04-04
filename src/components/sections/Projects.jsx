import React, { useState, useRef } from 'react';
import { projects, categories } from "../../data/projects";
import { Briefcase, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter(project => project.category === activeCategory);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);

        scrollContainerRef.current?.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        const container = scrollContainerRef.current;
        if (!container) return;

        const cardWidth = container.offsetWidth / 3;

        container.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth'
        });
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, filteredProjects.length - 3);
        scrollToIndex(Math.min(currentIndex + 1, maxIndex));
    };

    const prevSlide = () => {
        scrollToIndex(Math.max(currentIndex - 1, 0));
    };

    const categoryIcons = {
        'All': Target,
        'Web Apps': Globe,
        'UI Components': Palette,
        'Full Stack': Zap,
        'Marketing': Sparkles,
        'AI Web App': Zap,
    };

    return (
        <section id="projects" className="relative overflow-hidden bg-black py-24">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#6FE047]/20 opacity-20 blur-3xl"/>
                <div className="absolute bottom-1/3 left-0 h-96 w-96 rounded-full bg-[#6FE047]/20 opacity-20 blur-3xl"/>
                <div className="absolute top-1/2 right-1/3 h-96 w-96 rounded-full bg-[#6FE047]/10 opacity-20 blur-3xl"/>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#6FE047]/30 bg-[#6FE047]/10 px-4 py-2">
                            <Briefcase className="w-4 h-4 text-[#6FE047]" />
                            <span className="text-sm font-medium text-[#6FE047]">My Work</span>
                        </div>

                        <h2 className="mb-4 text-4xl font-semibold text-white lg:text-5xl">
                            Featured Projects
                        </h2>

                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Showcasing my best work and achievements
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={100}>
                    <div className="mb-8 flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'text-white'
                                        : 'text-white/60 hover:text-white'
                                }`}
                            >
                                <div className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'border-[#6FE047]/45 bg-[#6FE047]/15 opacity-100'
                                        : 'border-white/10 bg-white/5 group-hover:border-[#6FE047]/30 group-hover:bg-white/10'
                                }`}/>

                                <div className="relative flex items-center gap-2">
                                    {React.createElement(categoryIcons[category], { className: "w-4" })}
                                    <span className="text-sm">{category}</span>
                                </div>

                                {activeCategory === category && (
                                    <div className="absolute inset-0 rounded-full bg-[#6FE047]/20 blur-xl"/>
                                )}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Project Carousel */}
                <FadeIn delay={200}>
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
                        >
                            <div className="flex gap-6 pb-4">
                                {filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                                    >
                                        <ProjectCard project={project}/>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation arrows */}
                        {filteredProjects.length > 3 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-[#6FE047]/30 bg-black/55 backdrop-blur-sm transition-all duration-300 hover:bg-[#6FE047]/20 disabled:cursor-not-allowed disabled:opacity-50 lg:h-12 lg:w-12 lg:-translate-x-4"
                                    aria-label="Previous projects"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white"/>
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex >= filteredProjects.length - 3}
                                    className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-[#6FE047]/30 bg-black/55 backdrop-blur-sm transition-all duration-300 hover:bg-[#6FE047]/20 disabled:cursor-not-allowed disabled:opacity-50 lg:h-12 lg:w-12 lg:translate-x-4"
                                    aria-label="Next projects"
                                >
                                    <ChevronRight className="w-6 h-6 text-white"/>
                                </button>
                            </>
                        )}

                        {/* Navigation dots */}
                        {filteredProjects.length > 3 && (
                            <div className="flex items-center justify-center gap-2 mt-6">
                                {Array.from({ length: Math.ceil(filteredProjects.length - 2) }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${
                                            index === currentIndex
                                                ? 'h-2 w-6 bg-[#6FE047]'
                                                : 'bg-white/30 w-2 h-2 hover:bg-white/60'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;
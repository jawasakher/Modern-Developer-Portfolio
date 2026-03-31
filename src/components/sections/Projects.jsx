import React, { useState, useRef } from 'react';
import {projects, categories  } from "../../data/projects";
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, Chevro } from "";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";


const Projects = () => {

    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);


    const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

    // reset carousel when category changes
    const handleCategoryChange = (category) =>{
        setActiveCategory(category);
        setCurrentIndex(0);
        if  (scrollContainerRef.current) {
             scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth'})
        }
    };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth / 3 ;
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, filteredProjects.length - 3);
        const newIndex = Math.min(currentIndex + 1, maxIndex);
        scrollToIndex(newIndex);
    };

    // category icons mapping
    const categoryIcons = {
        'All': Target,
        'Web Apps': Globe,
        'UI Components': Palette,
        'Full Stack': Zap,
    };

  return (
    <section id="projects"className="">
        <div className="">
            <div className=""/>
             <div className=""/>
              <div className=""/>
              </div>

              <div className="">
                <FadeIn delay={0}>
                    <div className="">
                        <div className="">
                            <Briefcase className=""/>
                            <span className=""> My Work </span>
                            </div>
                            <h2 className="">
                                Featured Projects
                                </h2>
                                <p className="">
                                    Showcasing my best work and achievements
                                    </p>
                                    </div>
                                    </FadeIn>

                                    {/** Category Filter */}
                                    <FadeIn delay={100}>
                                        <div className="">
                                            {categories.map((category) => (
                                                <button
                                                key={category}
                                                onClick={() => handleCategoryChange(category)}
                                                className={`group relative px-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                                    ?'text-white'
                                                    :'text-white/60 hover:text-white'
                                                }`}
                                                >
                                                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === 
                                                        ? 'bg-primary/10 opacity-100'
                                                        : 'bg-white/5 border border-white/10 group-hover:bg-white/100'
                                                    }`}/>
                                                    <div className="">
                                                        {React.createElement(categoryIcons[category],{className:"w-4"})}
                                            ))}

      
    
  )
}

export default Projects

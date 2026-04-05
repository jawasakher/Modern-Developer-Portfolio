import React, { useEffect, useMemo, useRef, useState } from 'react';
import { projects, categories } from "../../data/projects";
import { Briefcase, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollContainerRef = useRef(null);
    const offsetsRef = useRef([]);
    const scrollRafRef = useRef(null);
    const refreshRafRef = useRef(null);
    const animateRafRef = useRef(null);
    const lastIndexRef = useRef(0);

    const filteredProjects = useMemo(() => {
        return activeCategory === 'All'
            ? projects
            : projects.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    const getReducedMotion = () => {
        if (typeof window === 'undefined' || !window.matchMedia) return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    const getScrollBehavior = () => (getReducedMotion() ? 'auto' : 'smooth');

    const cancelScrollAnimation = () => {
        if (animateRafRef.current) {
            window.cancelAnimationFrame(animateRafRef.current);
            animateRafRef.current = null;
        }
        setIsAnimating(false);
    };

    const animateScrollTo = (targetLeft) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        cancelScrollAnimation();

        if (getReducedMotion()) {
            container.scrollLeft = targetLeft;
            return;
        }

        const startLeft = container.scrollLeft;
        const delta = targetLeft - startLeft;
        if (Math.abs(delta) < 1) return;

        const durationMs = 420;
        const start = performance.now();
        setIsAnimating(true);

        const step = (now) => {
            const t = Math.min(1, (now - start) / durationMs);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            container.scrollLeft = startLeft + delta * eased;

            if (t < 1) {
                animateRafRef.current = window.requestAnimationFrame(step);
            } else {
                animateRafRef.current = null;
                setIsAnimating(false);
            }
        };

        animateRafRef.current = window.requestAnimationFrame(step);
    };

    const refreshCarouselMetrics = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const items = Array.from(container.querySelectorAll('[data-project-item="true"]'));
        if (items.length === 0) return;

        offsetsRef.current = items.map((el) => el.offsetLeft);

        const containerWidth = container.clientWidth;
        const itemWidth = items[0].clientWidth || 1;
        const computed = Math.max(1, Math.min(3, Math.round(containerWidth / itemWidth)));
        setCardsPerView(computed);
    };

    const scheduleRefresh = () => {
        if (refreshRafRef.current) return;
        refreshRafRef.current = window.requestAnimationFrame(() => {
            refreshRafRef.current = null;
            refreshCarouselMetrics();
        });
    };

    const getMaxIndex = (total) => Math.max(0, total - cardsPerView);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        lastIndexRef.current = 0;

        cancelScrollAnimation();

        if (getScrollBehavior() === 'smooth') {
            animateScrollTo(0);
        } else {
            scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'auto' });
        }
    };

    const scrollToIndex = (index) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const maxIndex = getMaxIndex(filteredProjects.length);
        const nextIndex = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(nextIndex);
        lastIndexRef.current = nextIndex;

        const offsets = offsetsRef.current;
        const targetLeft = offsets[nextIndex] ?? 0;

        if (getScrollBehavior() === 'smooth') {
            animateScrollTo(targetLeft);
        } else {
            container.scrollTo({ left: targetLeft, behavior: 'auto' });
        }
    };

    const nextSlide = () => {
        const maxIndex = getMaxIndex(filteredProjects.length);
        scrollToIndex(Math.min(currentIndex + 1, maxIndex));
    };

    const prevSlide = () => {
        scrollToIndex(Math.max(currentIndex - 1, 0));
    };

    useEffect(() => {
        refreshCarouselMetrics();

        const onResize = () => refreshCarouselMetrics();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // After filtering changes, DOM widths/offsets change.
        const id = window.requestAnimationFrame(() => refreshCarouselMetrics());
        return () => window.cancelAnimationFrame(id);
    }, [filteredProjects.length]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const onScroll = () => {
            if (scrollRafRef.current) return;
            scrollRafRef.current = window.requestAnimationFrame(() => {
                scrollRafRef.current = null;

                const offsets = offsetsRef.current;
                if (!offsets || offsets.length === 0) return;

                const left = container.scrollLeft;
                let idx = 0;
                for (let i = 0; i < offsets.length; i += 1) {
                    if (offsets[i] <= left + 1) idx = i;
                    else break;
                }

                const maxIndex = getMaxIndex(filteredProjects.length);
                idx = Math.max(0, Math.min(idx, maxIndex));

                if (idx !== lastIndexRef.current) {
                    lastIndexRef.current = idx;
                    setCurrentIndex(idx);
                }
            });
        };

        container.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            container.removeEventListener('scroll', onScroll);
            if (scrollRafRef.current) {
                window.cancelAnimationFrame(scrollRafRef.current);
                scrollRafRef.current = null;
            }
            if (refreshRafRef.current) {
                window.cancelAnimationFrame(refreshRafRef.current);
                refreshRafRef.current = null;
            }
        };
    }, [filteredProjects.length, cardsPerView]);

    useEffect(() => {
        return () => cancelScrollAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#6FE047]/20 opacity-20 blur-2xl"/>
                <div className="absolute bottom-1/3 left-0 h-96 w-96 rounded-full bg-[#6FE047]/20 opacity-20 blur-2xl"/>
                <div className="absolute top-1/2 right-1/3 h-96 w-96 rounded-full bg-[#6FE047]/10 opacity-20 blur-2xl"/>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0} threshold={0}>
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
                <FadeIn delay={0} threshold={0}>
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
                <FadeIn delay={0} threshold={0}>
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-auto snap-x snap-proximity md:snap-mandatory hide-scrollbar overscroll-x-contain touch-manipulation"
                            style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: isAnimating ? 'none' : undefined }}
                        >
                            <div className="flex gap-6 pb-4">
                                {filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        data-project-item="true"
                                        className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                                    >
                                        <ProjectCard project={project} onMediaLoad={scheduleRefresh} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation arrows */}
                        {filteredProjects.length > cardsPerView && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-[#6FE047]/30 bg-black/70 md:flex xl:backdrop-blur-sm transition-all duration-200 hover:bg-[#6FE047]/20 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6FE047]/60 disabled:cursor-not-allowed disabled:opacity-50 lg:h-12 lg:w-12 lg:-translate-x-4"
                                    aria-label="Previous projects"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white"/>
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex >= getMaxIndex(filteredProjects.length)}
                                    className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-[#6FE047]/30 bg-black/70 md:flex xl:backdrop-blur-sm transition-all duration-200 hover:bg-[#6FE047]/20 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6FE047]/60 disabled:cursor-not-allowed disabled:opacity-50 lg:h-12 lg:w-12 lg:translate-x-4"
                                    aria-label="Next projects"
                                >
                                    <ChevronRight className="w-6 h-6 text-white"/>
                                </button>
                            </>
                        )}

                        {/* Navigation dots */}
                        {filteredProjects.length > cardsPerView && (
                            <div className="flex items-center justify-center gap-2 mt-6">
                                {Array.from({ length: getMaxIndex(filteredProjects.length) + 1 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToIndex(index)}
                                        className="h-9 w-9 grid place-items-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6FE047]/60"
                                        aria-label={`Go to slide ${index + 1}`}
                                    >
                                        <span
                                            className={`transition-all duration-300 rounded-full ${
                                                index === currentIndex
                                                    ? 'h-2 w-6 bg-[#6FE047]'
                                                    : 'bg-white/30 w-2 h-2 hover:bg-white/60'
                                            }`}
                                        />
                                    </button>
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
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, ExternalLink, Layers3, TrendingUp, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'  

const ProjectCard = ({ project, onMediaLoad }) => {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const { title, description, image, technologies, metrics, role, problem, solution, architecture, demoUrl, githubUrl, category } = project;
  const isUnsplash = typeof image === 'string' && image.includes('images.unsplash.com');
  const buildUnsplashUrl = (w, q = 55) => {
    if (!isUnsplash) return image;
    // URLs in data already include query params; keep it regex-based to avoid URL() edge cases.
    let next = image;
    if (/[?&]w=\d+/.test(next)) next = next.replace(/([?&])w=\d+/, `$1w=${w}`);
    else next += (next.includes('?') ? '&' : '?') + `w=${w}`;

    if (/[?&]q=\d+/.test(next)) next = next.replace(/([?&])q=\d+/, `$1q=${q}`);
    else next += `&q=${q}`;

    return next;
  };

  const imgSrc = isUnsplash ? buildUnsplashUrl(900) : image;
  const imgSrcSet = isUnsplash
    ? [
        `${buildUnsplashUrl(500)} 500w`,
        `${buildUnsplashUrl(800)} 800w`,
        `${buildUnsplashUrl(1100)} 1100w`,
      ].join(', ')
    : undefined;

  const imgSizes = isUnsplash
    ? '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
    : undefined;

  useEffect(() => {
    if (!isCaseStudyOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsCaseStudyOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [isCaseStudyOpen]);

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden border border-white/10 bg-white/4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35">
      <div className="relative h-64 overflow-hidden bg-white/5">
        <img
          src={imgSrc}
          srcSet={imgSrcSet}
          sizes={imgSizes}
          alt={title}
          onLoad={onMediaLoad}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          draggable={false}
          width={1200}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"/>
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 xl:backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              title="View Demo"
            >
              <ExternalLink className="w-4 h-4 text-white"/>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 xl:backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              title="View Code"
            >
              <FaGithub className="w-4 h-4 text-white"/> {/* ← استخدم FaGithub */}
            </a>
          )}
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
            {category.join(' / ')}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-4 p-6">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">Selected work</span>
            <span className="font-mono text-[10px] text-white/35">0{project.id}</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-[#A8FF8D]">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            {description}
          </p>
        </div>

        {role && (
          <div className="border-l border-primary/45 pl-3 text-sm leading-relaxed text-white/75">
            <span className="mb-1 block text-[10px] uppercase tracking-[0.16em] text-white/40">My role</span>
            {role}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors duration-300 hover:bg-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {metrics && (
          <div className="flex items-center gap-2 border-t border-white/10 pt-3">
            <TrendingUp className="w-4 h-4 text-green-400"/>
            <p className="text-sm font-medium text-green-400">{metrics}</p>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsCaseStudyOpen(true)}
          className="group/details mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          Explore case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/details:-translate-y-0.5 group-hover/details:translate-x-0.5" />
        </button>
      </div>

      {isCaseStudyOpen && createPortal((
        <div
          className="fixed inset-0 z-1100 grid place-items-center bg-black/80 p-4 backdrop-blur-md"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsCaseStudyOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`case-study-${project.id}`}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-white/15 bg-[#0c0f0c] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsCaseStudyOpen(false)}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center border border-white/15 text-white/70 transition hover:border-primary/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label="Close case study"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-8 max-w-2xl pr-10">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Case study / 0{project.id}</p>
              <h3 id={`case-study-${project.id}`} className="mb-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h3>
              <p className="text-base leading-relaxed text-white/60">{description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-t border-white/15 pt-4">
                <p className="mb-2 text-xs uppercase tracking-[0.16em] text-white/40">The challenge</p>
                <p className="leading-relaxed text-white/80">{problem}</p>
              </div>
              <div className="border-t border-primary/40 pt-4">
                <p className="mb-2 text-xs uppercase tracking-[0.16em] text-primary/80">The approach</p>
                <p className="leading-relaxed text-white/80">{solution}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/15 pt-5">
              <div className="mb-4 flex items-center gap-2">
                <Layers3 className="h-4 w-4 text-primary" />
                <p className="text-xs uppercase tracking-[0.16em] text-white/45">System architecture</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {architecture?.map((layer, index) => (
                  <div key={layer} className="border border-white/10 bg-white/[0.035] p-4">
                    <span className="mb-3 block font-mono text-[10px] text-primary/70">0{index + 1}</span>
                    <span className="text-sm leading-relaxed text-white/80">{layer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/15 pt-5">
              {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#95ff72]">Live demo <ExternalLink className="h-4 w-4" /></a>}
              {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-primary/50 hover:text-primary">View source <FaGithub className="h-4 w-4" /></a>}
            </div>
          </div>
        </div>
      ), document.body)}
    </article>
  )
}

export default ProjectCard
import React from 'react'
import { ExternalLink, TrendingUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'  

const ProjectCard = ({ project, onMediaLoad }) => {
  const { title, description, image, technologies, metrics, role, demoUrl, githubUrl, category } = project;
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

  return (
    <article className="group relative overflow-hidden border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"/>
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
            {category}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-6">
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
      </div>
    </article>
  )
}

export default ProjectCard
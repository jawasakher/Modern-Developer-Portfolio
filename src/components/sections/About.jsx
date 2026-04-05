import React from 'react';
import { Download, Code2, Sparkles } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { ABOUT_STATS, PERSONAL_INFO } from '../../utils/constants';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';
import FadeIn from '../animations/FadeIn';

const About = () => {

  const skills = [
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind Css', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ];

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT */}
          <div className="flex flex-col gap-12">

            <div className="flex flex-col gap-8">

              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6FE047]/35 bg-[#6FE047]/10 px-5 py-2.5">
                  <Code2 className="w-4 h-4 text-[#6FE047]" />
                  <span className="text-sm text-[#6FE047]">
                    Crafting Modern Web Experiences
                  </span>
                  <Sparkles className="w-4 h-4 text-[#6FE047]" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Transforming Ideas Into Exceptional Digital Experiences
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index} className="text-base text-white/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

            </div>

            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-8">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full rounded-full bg-gradient-to-b from-[#6FE047] via-[#6FE047]/50 to-[#6FE047]/20"></div>
                    <div className="text-3xl text-white mb-2 font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <a
                href={PERSONAL_INFO.resume}
                download
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6FE047] via-[#8ef57a] to-[#c8ffbb] px-8 py-4 text-black font-semibold shadow-[0_20px_60px_rgba(111,224,71,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(111,224,71,0.3)]"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </FadeIn>

          </div>

          {/* RIGHT */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">

              {/* Card 1 */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6FE047]/10 to-[#6FE047]/5 blur-xl opacity-50 transition-opacity group-hover:opacity-75"></div>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#6FE047]/30">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-[#6FE047]/10 p-3">
                      <Code2 className="w-6 h-6 text-[#6FE047]" />
                    </div>
                    <div>
                      <h3 className="text-lg text-white mb-2">Expertise</h3>
                      <p className="text-sm text-white/70">
                        Specialized in building scalable web applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6FE047]/10 to-[#6FE047]/5 blur-xl opacity-50 transition-opacity group-hover:opacity-75"></div>
                <div className="relative w-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#6FE047]/30">
                  <div className="mb-4 w-fit rounded-xl bg-[#6FE047]/10 p-3">
                    <Sparkles className="w-5 h-5 text-[#6FE047]" />
                  </div>
                  <h3 className="text-white mb-2">Clean Code</h3>
                  <p className="text-sm text-white/70">
                    Writing maintainable, well-documented code that scales.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6FE047]/10 to-[#6FE047]/5 blur-xl opacity-50 transition-opacity group-hover:opacity-75"></div>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#6FE047]/30">
                  <div className="mb-4 w-fit rounded-xl bg-[#6FE047]/10 p-3">
                    <Download className="w-5 h-5 text-[#6FE047]" />
                  </div>
                  <h3 className="text-white mb-2">Performance</h3>
                  <p className="text-sm text-white/70">
                    Optimizing for speed and efficiency
                  </p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6FE047]/10 to-[#6FE047]/5 blur-xl opacity-50 transition-opacity group-hover:opacity-75"></div>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="grid grid-cols-3 gap-6 text-center">

                    <div>
                      <div className="text-2xl text-[#6FE047]">100%</div>
                      <div className="text-xs text-white/60">Client Satisfaction</div>
                    </div>

                    <div>
                      <div className="text-2xl text-[#6FE047]">24/7</div>
                      <div className="text-xs text-white/60">Support</div>
                    </div>

                    <div>
                      <div className="text-2xl text-[#6FE047]">Fast</div>
                      <div className="text-xs text-white/60">Delivery</div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

        {/** skills grid section */}
          <FadeIn delay={500}>
            <div className="flex flex-col items-center gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-normal text-white mb-2">
                  Tech Stack & Expertise
                </h3>
                <p className="text-sm text-white/60">
                  Technologies I work with to build amazing web applications:
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full max-w-4xl">
                {skills.map((skill, index) => (
                  <div 
                  key={index} 
                  className="group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-105 hover:border-[#6FE047]/50 hover:bg-white/10"
                  >
                    <skill.icon className="text-3xl text-[#6FE047]"/>
                    <div className="text-sm text-white/80 font-medium group-hover:text-white text-center">
                    
                    {skill.name}
        
                  </div>
                  {/** hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#6FE047]/0 to-[#6FE047]/0 transition-all duration-300 group-hover:from-[#6FE047]/10 group-hover:to-[#6FE047]/10"></div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
      </div>
    </section>
  );
};

export default About;

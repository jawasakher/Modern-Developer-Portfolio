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
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">
                    Crafting Modern Web Experiences
                  </span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl text-white leading-tight">
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
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
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
              <button
                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </FadeIn>

          </div>

          {/* RIGHT */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">

              {/* Card 1 */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Code2 className="w-6 h-6 text-primary" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all w-full">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-white mb-2">Clean Code</h3>
                  <p className="text-sm text-white/70">
                    Writing maintainable, well-documented code that scales.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <Download className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-white mb-2">Performance</h3>
                  <p className="text-sm text-white/70">
                    Optimizing for speed and efficiency
                  </p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-6 text-center">

                    <div>
                      <div className="text-2xl text-primary">100%</div>
                      <div className="text-xs text-white/60">Client Satisfaction</div>
                    </div>

                    <div>
                      <div className="text-2xl text-primary">24/7</div>
                      <div className="text-xs text-white/60">Support</div>
                    </div>

                    <div>
                      <div className="text-2xl text-primary">Fast</div>
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
                  className="group relative flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all cursor-pointer hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 justify-center gap-3 transition-all duration-300 hover:scale"
                  >
                    <skill.icon className="text-3xl text-primary"/>
                    <div className="text-sm text-white/80 font-medium group-hover:text-white text-center">
                    
                    {skill.name}
        
                  </div>
                  {/** hover glow effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
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

import React, { useEffect, useState } from 'react';
import { Activity, ArrowDownRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { STATS } from '../../utils/constants';
import {scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const introLines = [
  'Full-Stack Developer',
  'React.js · Node.js · JavaScript · PostgreSQL',
  'Building production-ready web applications',
  'React interfaces backed by reliable APIs',
  'From product idea to deployable system',
  'Designing clear experiences and scalable systems',
];

const Hero = () => {
  const [introIndex, setIntroIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = introLines[introIndex];
    const isComplete = typedText === currentLine;
    const typingSpeed = isDeleting ? 38 : 72;
    const pause = isComplete && !isDeleting ? 3000 : typingSpeed;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentLine.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === currentLine) setIsDeleting(true);
      } else {
        const nextText = currentLine.slice(0, typedText.length - 1);
        setTypedText(nextText);

        if (nextText === '') {
          setIsDeleting(false);
          setIntroIndex((currentIndex) => (currentIndex + 1) % introLines.length);
        }
      }
    }, pause);

    return () => window.clearTimeout(timer);
  }, [introIndex, introLines, isDeleting, typedText]);

  return (
    <section className="relative flex min-h-screen items-start overflow-hidden bg-black">
        <RadialGradientBackground  variant="hero"/> 
      {/** content container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/**left column content */}
          <div className="text-center lg:text-left">
                  <FadeIn delay={100}>

                      <h1 className="hero-name mb-4 whitespace-nowrap text-4xl font-bold leading-[1.02] text-white md:text-5xl lg:text-7xl">
                    Jawa Sakher
                       </h1>
                   </FadeIn>

                     <FadeIn delay={200}>
                     <p className="hero-type mb-8 min-h-8 max-w-[560px] whitespace-nowrap text-sm font-semibold leading-tight text-[#6FE047] sm:text-lg md:text-2xl lg:text-3xl">
                      <span aria-live="polite">{typedText}</span>
                      <span className="ml-1 inline-block h-5 w-px animate-pulse bg-[#6FE047] align-middle" aria-hidden="true" />
                      </p>
                     </FadeIn>
                      <FadeIn delay={300}>
                        <button 
                        onClick={() => scrollToSection('contact')}
                        className="group mb-12 inline-flex items-center gap-3 rounded-xl bg-[#6FE047] px-6 py-3.5 text-base font-semibold text-[#0b0b0b] shadow-[0_20px_60px_rgba(111,224,71,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#95ff72]"
                        >
                          Start a conversation
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>
                       </FadeIn>

                       <FadeIn delay={400}>
                       <div className="grid max-w-full grid-cols-2 gap-x-6 gap-y-5 text-left md:grid-cols-4">
                        {STATS.map((stat, index) => (
                          <div key={index} className="border-l border-white/15 pl-3 text-left">
                           <div className="mb-1.5 font-mono text-lg font-normal text-[#6FE047]">
                            {stat.value}</div>
                          
                          <p className="text-sm leading-snug text-white/85">
                            {stat.label}
                          </p>
                          </div>
                        ))}

                       </div>
                       </FadeIn>
                
                  </div>
                  {/** right column - developer image */}
                  <FadeIn delay={200}>
                    <div className="relative lg:pl-8">
                      <div className="group relative ml-auto aspect-[4/5] max-w-[500px] overflow-hidden rounded-3xl border border-[#6FE047]/20 bg-white/[0.02] p-1">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-[-2px] animate-spin-slow rounded-2xl bg-linear-to-r from-[#6FE047]/20 via-[#6FE047]/10 to-[#6FE047]"></div>
                      </div>
                      <div className="absolute -bottom-5 -left-3 z-30 w-[min(260px,70%)] rounded-2xl border border-white/15 bg-[#0b0d0b]/90 p-4 shadow-2xl backdrop-blur-xl sm:left-0">
                        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/45">
                          <span>System status</span>
                          <Activity className="h-3.5 w-3.5 text-[#6FE047]" />
                        </div>
                        <div className="mb-3 flex items-center gap-2 text-sm text-white">
                          <span className="h-2 w-2 rounded-full bg-[#6FE047] shadow-[0_0_12px_#6FE047]" />
                          All systems operational
                        </div>
                        <div className="grid grid-cols-2 gap-2 font-mono text-[10px] text-white/50">
                          <span>UI / React</span>
                          <span>API / Node.js</span>
                          <span>DATA / PostgreSQL</span>
                          <span>SHIP / Cloudflare</span>
                        </div>
                      </div>
                      <div className="absolute -right-3 top-8 hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/40 xl:flex">
                        <ArrowDownRight className="h-4 w-4 text-[#6FE047]" />
                        <span>Design / Build / Scale</span>
                      </div>
                      {/*image container */}
                      <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)] ">
                       <img src="/developer-portrait.jpg"
                       alt="Jawa Sakher, Full-Stack Developer"
                       className="h-full w-full object-cover object-[center_18%]"
                       />
                      </div>
                      {/**technology logos */}
                      <div className="absolute bottom-6 left-6 z-20">
                        <FadeIn delay={500}>
                          <div className="flex items-center gap-4 rounded-full border border-[#6FE047]/20 bg-black/60 px-4 py-2 backdrop-blur-sm">
                            <div className="flex h-6 w-6 items-center justify-center transition duration-300 hover:scale-110" >
                              <SiReact className="h-full w-full text-[#6FE047]"/>
                              </div>

                              <div className="flex h-6 w-6 items-center justify-center transition duration-300 hover:scale-110"> 
                                <SiNextdotjs className="h-full w-full text-[#6FE047]"/>
                                </div>

                                <div className="flex h-6 w-6 items-center justify-center transition duration-300 hover:scale-110">
                                  <SiNodedotjs  className="h-full w-full text-[#6FE047]"/>
                                  </div>

                                  <div className="flex h-6 w-6 items-center justify-center transition duration-300 hover:scale-110">
                                    <SiTailwindcss className="h-full w-full text-[#6FE047]"/>
                                    </div>

                                    <div className="flex h-6 w-6 items-center justify-center transition duration-300 hover:scale-110">
                                      <SiMongodb className="h-full w-full text-[#6FE047]"/>
                                      </div>
                                      </div>
                                      </FadeIn>
                                      </div>
                                      </div>
                                      </div>
                                      </FadeIn>

                  
                  </div>
                  </div>

                  {/**scroll indicator */}
                  <button
                  onClick={() => scrollToSection('about')}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
                  >
                    <ChevronDown className="w-8 h-8 text-[#6FE047]"/>
                    </button>
                  </section>
  )
}

export default Hero

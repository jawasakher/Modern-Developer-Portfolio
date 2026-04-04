import React from 'react';
import { ChevronDown, Star} from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO,STATS} from '../../utils/constants';
import {scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';


const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <RadialGradientBackground  variant="hero"/> 
      {/** content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/**left column content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#6FE047]/35 bg-[#6FE047]/10 px-5 py-2.5">
                <Star className="h-4 w-4 text-[#6FE047]"/>
                <span className="text-xs text-white/85 tracking-[1.2px] md:text-sm">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                  </span>
                  </div>
                  </FadeIn>


                  <FadeIn delay={100}>

                      <h1 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                    Frontend Engineer
                       <br />
                        <span className="text-[#6FE047]">
                    React & Modern Web Technologies  
                       </span>
                       </h1>
                   </FadeIn>

                     <FadeIn delay={200}>
                     <p className="mb-8 max-w-[550px] text-lg leading-relaxed text-white/70">
                      Building performant, scalable, and visually engaging web applications
                      </p>
                     </FadeIn>
                      <FadeIn delay={300}>
                        <button 
                        onClick={() => scrollToSection('contact')}
                        className="group mb-12 inline-flex items-center"
                        >
                        <div className="relative z-10 rounded-2xl bg-gradient-to-r from-[#6FE047] via-[#8ef57a] to-[#c8ffbb] px-7 py-3.5 text-center text-base font-semibold text-[#0b0b0b] shadow-[0_20px_60px_rgba(111,224,71,0.22)] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_28px_90px_rgba(111,224,71,0.32)]">
                          Get in Touch
                          </div>
                          </button>
                       </FadeIn>

                       <FadeIn delay={400}>
                       <div className="grid max-w-full grid-cols-2 gap-4 md:grid-cols-4">
                        {STATS.map((stat, index) => (
                          <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                           <div className="mb-1.5 font-mono text-2xl font-normal text-[#6FE047]">
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
                    <div className="relative">
                      <div className="group relative ml-auto aspect-4/5 max-w-[500px] overflow-hidden rounded-3xl border border-[#6FE047]/20 bg-white/[0.02] p-1">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-[-2px] animate-spin-slow rounded-2xl bg-linear-to-r from-[#6FE047]/20 via-[#6FE047]/10 to-[#6FE047]"></div>
                      </div>
                      {/*image container */}
                      <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)] ">
                       <img src="developer-portrait.jpg"
                       alt="Developer at work"
                       className="w-full h-full object-cover"
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
